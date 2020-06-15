
module.exports = class YIELDEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.argument !== null) {
            this.argument = new EXPRESSION();
            this.argument.parse(node.init);
        } else {
            this.argument = null;
        }
    }
    evaluate(table) {
        this.loc.evaluate(table);
        this.argument.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");