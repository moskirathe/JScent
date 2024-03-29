// interface ExportDefaultDeclaration {
//     type: 'ExportDefaultDeclaration';
//     declaration: Identifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration;
// }

module.exports = class EXPORTDEFAULTDECLARATION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.declaration.type === "Identifier") {
            let temp = new IDENTIFIER();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "ArrayPattern" || node.declaration.type === "ObjectPattern") {
            let temp = new BINDINGPATTERN();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "ClassDeclaration") {
            let temp = new CLASSDECLARATION();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "FunctionDeclaration") {
            let temp = new FUNCTIONDECLARATION();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else {
            let temp = new EXPRESSION();
            this.declaration = temp;
            temp.parse(node.declaration);
        }
    }
    evaluate(table) {
        this.declaration.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");
const CLASSDECLARATION = require("./CLASSDECLARATION");
const EXPRESSION = require("./EXPRESSION");
const FUNCTIONDECLARATION = require("./FUNCTIONDECLARATION");
