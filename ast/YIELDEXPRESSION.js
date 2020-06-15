
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
}

const EXPRESSION = require("./EXPRESSION");