
module.exports = class AWAITEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }

    evaluate(table) {
        this.argument.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
