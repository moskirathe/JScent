
// interface IfStatement {
//     type: 'IfStatement';
//     test: Expression; X
//     consequent: Statement; X
//     alternate?: Statement;
// }

module.exports = class IFSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.test = new EXPRESSION();
        this.test.parse(node.test);

        this.consequent = new STATEMENT();
        this.consequent.parse(node.consequent);

        if (node.alternate) {
            this.alternate = new STATEMENT();
            this.alternate.parse(node.alternate);
        }
    }
    evaluate(table) {
        this.test.evaluate(table);
        this.consequent.evaluate(table);
        this.alternate.evaluate(table);
    }


}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");
