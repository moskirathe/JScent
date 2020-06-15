const EXPRESSION = require("./EXPRESSION");

module.exports = class UPDATEEXPRESSION {
    parse(node) {
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
}