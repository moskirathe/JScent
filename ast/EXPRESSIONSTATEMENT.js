
// interface ExpressionStatement {
//     type: 'ExpressionStatement';
//     expression: Expression;
//     directive?: string;
// }

module.exports = class EXPRESSIONSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.expression = new EXPRESSION();
        this.expression.parse(node.expression);
    }
    evaluate(table) {
        this.expression.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
