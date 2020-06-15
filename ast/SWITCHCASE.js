const EXPRESSION = require("./EXPRESSION");

export default class SWITCHCASE {
    parse(node) {
        this.test = new EXPRESSION();
        this.test.parse(node.test);
        this.consequent = [];
        for (let consequent of node.consequent) {
            let temp = new STATEMENT();
            this.consequent.push(temp);
            temp.parse(consequent);
        }
    }
}