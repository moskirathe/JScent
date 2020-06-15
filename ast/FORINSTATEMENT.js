
// interface ForInStatement {
//     type: 'ForInStatement';
//     left: Expression;
//     right: Expression;
//     body: Statement;
//     each: false;
// }

module.exports = class FORINSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.left = new EXPRESSION();
        this.left.parse(node.left);

        this.right = new EXPRESSION();
        this.right.parse(node.right);

        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");
