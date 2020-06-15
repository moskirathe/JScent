const EXPRESSION = require("./EXPRESSION");

module.exports = class LOGICALEXPRESSION{
    parse(node){
        this.operator = node.operator;
        this.left = new EXPRESSION();
        this.left.parse(node.left);
        this.right = new EXPRESSION();
        this.right.parse(node.right);
    }
}