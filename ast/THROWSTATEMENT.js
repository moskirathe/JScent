
module.exports = class THROWSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
    evaluate(table) {
        return this.argument.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
