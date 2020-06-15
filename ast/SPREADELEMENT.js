const EXPRESSION = require("./EXPRESSION");

module.exports = class SPREADELEMENT {
    parse(node) {
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
}