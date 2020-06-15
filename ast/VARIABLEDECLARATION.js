const VARIABLEDECLARATOR = require("./VARIABLEDECLARATOR");
module.exports = class VARIABLEDECLARATION {
    parse(node) {
        this.declarations = [];
        for (let declarations of node.declarations) {
            let temp = new VARIABLEDECLARATOR();
            this.declarations.push(temp);
            temp.parse(declarations);
        }
        this.kind = node.kind;
    }
}