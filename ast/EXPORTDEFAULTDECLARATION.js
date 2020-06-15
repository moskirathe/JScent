const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");
const CLASSDECLARATION = require("./CLASSDECLARATION");
const EXPRESSION = require("./EXPRESSION");
const FUNCTIONDECLARATION = require("./FUNCTIONDECLARATION");

// interface ExportDefaultDeclaration {
//     type: 'ExportDefaultDeclaration';
//     declaration: Identifier | BindingPattern | ClassDeclaration | Expression | FunctionDeclaration;
// }

module.exports = class EXPORTALLDECLARATION {
    parse(node) {
        if (node.declaration.type === "Identifier") {
            let temp = new IDENTIFIER();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "BindingPattern") {
            let temp = new BINDINGPATTERN();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "ClassDeclaration") {
            let temp = new CLASSDECLARATION();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "Expression") {
            let temp = new EXPRESSION();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "FunctionDeclaration") {
            let temp = new FUNCTIONDECLARATION();
            this.declaration = temp;
            temp.parse(node.declaration);
        }
    }
}