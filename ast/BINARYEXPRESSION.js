const EXPRESSION = require("./EXPRESSION");

module.exports = class BINARYEXPRESSION {
    parse(node) {
        this.left = new EXPRESSION();
        this.left.parse(node.left);
        this.right = new EXPRESSION();
        this.right.parse(node.right);
    }
}