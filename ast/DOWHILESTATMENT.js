
// interface DoWhileStatement {
//     type: 'DoWhileStatement';
//     body: Statement;
//     test: Expression;
// }

module.exports = class DOWHILESTATMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        let s = new STATEMENT();
        this.body = s;
        s.parse(node.body);

        let e = new EXPRESSION();
        this.test = e;
        e.parse(node.test);
    }
    evaluate(table) {
        this.body.evaluate(table);
        this.test.evaluate(table);
    }
}

const STATEMENT = require("./STATEMENT");
const EXPRESSION = require("./EXPRESSION");
