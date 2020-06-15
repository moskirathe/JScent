const STATEMENT = require("./STATEMENT");
const EXPRESSION = require("./EXPRESSION");

// interface DoWhileStatement {
//     type: 'DoWhileStatement';
//     body: Statement;
//     test: Expression;
// }

module.exports = class DOWHILESTATMENT {
    parse(node) {
        let s = new STATEMENT();
        this.body = s;
        s.parse(node.body);

        let e = new EXPRESSION();
        this.test = e;
        e.parse(node.test);
    }
}