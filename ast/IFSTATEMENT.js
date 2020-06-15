const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");

// interface IfStatement {
//     type: 'IfStatement';
//     test: Expression; X
//     consequent: Statement; X
//     alternate?: Statement;
// }

export default class IFSTATEMENT {
    parse(node) {
        this.test = new EXPRESSION();
        this.test.parse(node.test);

        this.consequent = new STATEMENT();
        this.consequent.parse(node.consequent);

        if (node.alternate) {
            this.alternate = new STATEMENT();
            this.alternate.parse(node.alternate);
        }
    }


}