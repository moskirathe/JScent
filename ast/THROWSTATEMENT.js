const EXPRESSION = require("./EXPRESSION");

module.exports = class THROWSTATEMENT {
    parse(node) {
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
}