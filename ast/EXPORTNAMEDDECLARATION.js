const CLASSDECLARATION = require("./CLASSDECLARATION");
const FUNCTIONDECLARATION = require("./FUNCTIONDECLARATION");
const VARIABLEDECLARATION = require("./VARIABLEDECLARATION");
const LITERAL = require("./LITERAL");
const EXPORTSPECIFIER = require("./EXPORTSPECIFIER");

// interface ExportNamedDeclaration {
//     type: 'ExportNamedDeclaration';
//     declaration: ClassDeclaration | FunctionDeclaration | VariableDeclaration; X
//     specifiers: ExportSpecifier[]; X
//     source: Literal; X
// }

export default class EXPORTALLDECLARATION {
    parse(node) {
        this.source = new LITERAL();
        this.source.parse(node.source);
        this.specifiers = [];

        for (let specifier of node.specifiers) {
            let e = new EXPORTSPECIFIER();
            this.specifiers.push(e);
            e.parse(specifier);
        }

        if(node.declaration.type === "ClassDeclaration") {
            let temp = new CLASSDECLARATION();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "FunctionDeclaration") {
            let temp = new FUNCTIONDECLARATION();
            this.declaration = temp;
            temp.parse(node.declaration);
        } else if(node.declaration.type === "VariableDeclaration") {
            let temp = new VARIABLEDECLARATION();
            this.declaration = temp;
            temp.parse(node.declaration);
        }
    }
}