const EXPRESSION = require("./EXPRESSION");

module.exports = class SWITCHCASE {
    parse(node) {
        if (node.test !== null) {
            this.test = new EXPRESSION();
            this.test.parse(node.test);
        } else {
            this.test = null;
        }
        this.consequent = [];
        for (let consequent of node.consequent) {
            let temp = new STATEMENT();
            this.consequent.push(temp);
            temp.parse(consequent);
        }
    }
}