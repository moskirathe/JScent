const EXPRESSION = require("./EXPRESSION");

module.exports = class UNARYEXPRESSION {
    parse(node) {
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
}