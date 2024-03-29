
class STATEMENTLISTITEM {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.type === "ClassDeclaration" || node.type === "FunctionDeclaration" || node.type === "VariableDeclaration") {
            this.item = new DECLARATION();
            this.item.parse(node);
        } else {
            this.item = new STATEMENT();
            this.item.parse(node);
        }
    }
    evaluate(table) {
        return this.item.evaluate(table);
    }
}

module.exports = STATEMENTLISTITEM;

const DECLARATION = require("./DECLARATION");
const STATEMENT = require("./STATEMENT");
