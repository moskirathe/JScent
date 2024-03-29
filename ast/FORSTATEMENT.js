
// interface ForStatement {
//     type: 'ForStatement';
//     init: Expression | VariableDeclaration | null; x
//     test: Expression | null; x
//     update: Expression | null; x
//     body: Statement;
// }

module.exports = class FORSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.init === null) {
             this.init = null;
        } else if (node.init.type === "VariableDeclaration") {
            this.init = new VARIABLEDECLARATION();
            this.init.parse(node.init)
        } else {
             this.init = new EXPRESSION();
             this.init.parse(node.init)
        }
        if (node["test"].type !== null) {
            this.test = new EXPRESSION();
            this.test.parse(node["test"]);
        } else {
            this.test = null;
        }
        if (node.update.type !== null) {
            this.update = new EXPRESSION();
            this.update.parse(node.update)
        } else {
            this.update = null;
        }
        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
    evaluate(table) {
        if (this.init) {
            this.init.evaluate(table);
        }
        if (this.test) {
            this.test.evaluate(table);
        }
        if (this.update) {
            this.update.evaluate(table);
        }
        this.body.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");
const VARIABLEDECLARATION = require("./VARIABLEDECLARATION");
