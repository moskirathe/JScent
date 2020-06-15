const EXPRESSION = require("./EXPRESSION");

// interface ExpressionStatement {
//     type: 'ExpressionStatement';
//     expression: Expression;
//     directive?: string;
// }

module.exports = class EXPRESSIONSTATEMENT {
    parse(node) {
        this.expression = new EXPRESSION();
        this.expression.parse(node.expression);
    }
}