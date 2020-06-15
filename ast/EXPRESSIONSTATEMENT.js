const EXPRESSION = require("./EXPRESSION");

// interface ExpressionStatement {
//     type: 'ExpressionStatement';
//     expression: Expression;
//     directive?: string;
// }

export default class EXPRESSIONSTATEMENT {
    parse(node) {
        this.expression = new EXPRESSION();
        this.expression.parse(node.expression);
    }
}