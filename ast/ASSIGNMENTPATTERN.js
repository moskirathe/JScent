const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");
const EXPRESSION = require("./EXPRESSION");

module.exports = class ASSIGNMENTPATTERN {
    parse(node) {
        if (node.left.type === "Identifier") {
            this.left = new IDENTIFIER();
            this.left.parse(node.left);
        } else {
            this.left = new BINDINGPATTERN();
            this.left.parse(node.left);
        }
        this.right = new EXPRESSION();
        this.right.parse(node.right);
    }
}