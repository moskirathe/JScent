const VARIABLEDECLARATOR = require("./VARIABLEDECLARATOR");
export default class VARIABLEDECLARATION {
    parse(node) {
        this.declarations = [];
        for (let declarations of node.declarations) {
            let temp = new VARIABLEDECLARATOR();
            this.consequent.push(temp);
            temp.parse(declarations);
        }
    }
}