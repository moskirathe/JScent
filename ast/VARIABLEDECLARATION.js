
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
}

const VARIABLEDECLARATOR = require("./VARIABLEDECLARATOR");