
class STATEMENTLISTITEM {
    parse(node) {
        if (node.type === "ClassDeclaration" || node.type === "FunctionDeclaration" || node.type === "VariableDeclaration") {
            this.item = new DECLARATION();
            this.item.parse(node);
        } else {
            this.item = new STATEMENT();
            this.item.parse(node);
        }
    }
}

module.exports = STATEMENTLISTITEM;

const DECLARATION = require("./DECLARATION");
const STATEMENT = require("./STATEMENT");
