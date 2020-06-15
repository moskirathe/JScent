const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");

// interface ForOfStatement {
//     type: 'ForOfStatement';
//     left: Expression;
//     right: Expression;
//     body: Statement;
// }

export default class FOROFSTATEMENT {
    parse(node) {
        this.left = new EXPRESSION();
        this.left.parse(node.left);

        this.right = new EXPRESSION();
        this.right.parse(node.right);

        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}