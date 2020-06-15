const ASSIGNMENTPATTERN = require("./ASSIGNMENTPATTERN");
const IDENTIFIER = require("./IDENTIFIER");
const RESTELEMENT = require("./RESTELEMENT");
const BINDINGPATTERN = require("./BINDINGPATTERN");

module.exports = class ARRAYPATTERN {
    parse(node) {
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
}