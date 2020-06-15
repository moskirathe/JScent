
module.exports = class ARRAYPATTERN {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        let elements = [];
        for (let element of node.elements) {
            if (element === null) {
                continue;
            } else if (element.type === "AssignmentPattern") {
                let temp = new ASSIGNMENTPATTERN();
                elements.push(temp);
                temp.parse(element);
            } else if (element.type === "Identifier") {
                let temp = new IDENTIFIER();
                elements.push(temp);
                temp.parse(element);
            } else if (element.type === "RestElement") {
                let temp = new RESTELEMENT();
                elements.push(temp);
                temp.parse(element);
            } else {
                let temp = new BINDINGPATTERN();
                elements.push(temp);
                temp.parse(element);
            }
        }
    }

    evaluate(table) {
        for (let elem of this.elements) {
            elem.evaluate(table);
        }
    }
}

const ASSIGNMENTPATTERN = require("./ASSIGNMENTPATTERN");
const IDENTIFIER = require("./IDENTIFIER");
const RESTELEMENT = require("./RESTELEMENT");
const BINDINGPATTERN = require("./BINDINGPATTERN");
