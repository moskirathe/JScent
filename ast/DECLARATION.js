module.exports = class DECLARATION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.type === "ClassDeclaration") {
            this.type = new CLASSDECLARATION();
            this.type.parse(node);
        } else if (node.type === "FunctionDeclaration") {
            this.type = new FUNCTIONDECLARATION();
            this.type.parse(node);
        } else {
            this.type = new VARIABLEDECLARATION();
            this.type.parse(node);
        }
    }
    evaluate(table) {
        this.type.evaluate(table);
    }
}

const CLASSDECLARATION = require("./CLASSDECLARATION");
const FUNCTIONDECLARATION = require("./FUNCTIONDECLARATION");
const VARIABLEDECLARATION = require("./VARIABLEDECLARATION");
