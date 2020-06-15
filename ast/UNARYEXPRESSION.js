
module.exports = class UNARYEXPRESSION {
    parse(node) {
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
}

const EXPRESSION = require("./EXPRESSION");
