
module.exports = class FUNCTIONPARAMETER {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.type === "AssignmentPattern") {
            this.type = new ASSIGNMENTPATTERN();
            this.type.parse(node);
        } else if (node.type === "Identifier") {
            this.type = new IDENTIFIER();
            this.type.parse(node);
        } else {
            this.type = new BINDINGPATTERN();
            this.type.parse(node);
        }
    }
    evaluate(table) {
        this.type.evaluate(table);
    }
}

const ASSIGNMENTPATTERN = require("./ASSIGNMENTPATTERN");
const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");

