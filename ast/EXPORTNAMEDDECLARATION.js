
// interface ExportNamedDeclaration {
//     type: 'ExportNamedDeclaration';
//     declaration: ClassDeclaration | FunctionDeclaration | VariableDeclaration; X
//     specifiers: ExportSpecifier[]; X
//     source: Literal; X
// }

module.exports = class EXPORTNAMEDECLARATION {
    parse(node) {
        console.log(node);
        this.loc = node.loc;
        this.comments = node.comments;
        this.source = new LITERAL();
        if (node.source) {
            this.source.parse(node.source);
        } else {
            this.source = null;
        }
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
    evaluate(table) {
        if (this.source) {
            this.source.evaluate(table);
        }
        for (let argument of this.specifiers) {
            argument.evaluate(table);
        }
        this.declaration.evaluate(table);
    }
}

const CLASSDECLARATION = require("./CLASSDECLARATION");
const FUNCTIONDECLARATION = require("./FUNCTIONDECLARATION");
const VARIABLEDECLARATION = require("./VARIABLEDECLARATION");
const LITERAL = require("./LITERAL");
const EXPORTSPECIFIER = require("./EXPORTSPECIFIER");