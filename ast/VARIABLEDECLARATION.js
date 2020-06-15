
module.exports = class VARIABLEDECLARATION {
    parse(node) {
        this.loc = node.loc;
        this.declarations = [];
        for (let declarations of node.declarations) {
            let temp = new VARIABLEDECLARATOR();
            this.declarations.push(temp);
            temp.parse(declarations);
        }
        this.kind = node.kind;
    }
    evaluate(table) {
        this.loc.evaluate(table);
        for (let argument of this.declarations) {
            argument.evaluate(table);
        }
    }
}

const VARIABLEDECLARATOR = require("./VARIABLEDECLARATOR");