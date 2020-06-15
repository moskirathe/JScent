
module.exports = class BINARYEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.left = new EXPRESSION();
        this.left.parse(node.left);
        this.right = new EXPRESSION();
        this.right.parse(node.right);
    }

    evaluate(table) {
        this.left.evaluate(table);
        this.right.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
