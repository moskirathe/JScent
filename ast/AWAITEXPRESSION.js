const EXPRESSION = require("./EXPRESSION");

module.exports = class AWAITEXPRESSION {
    parse(node) {
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
}