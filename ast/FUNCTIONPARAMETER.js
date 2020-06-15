
module.exports = class FUNCTIONPARAMETER {
    parse(node) {
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
}

const ASSIGNMENTPATTERN = require("./ASSIGNMENTPATTERN");
const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");

