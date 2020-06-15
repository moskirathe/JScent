
module.exports = class SWITCHCASE {
    parse(node) {
        this.loc = node.loc;
        if (node["test"] !== null) {
            this.test = new EXPRESSION();
            this.test.parse(node["test"]);
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

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");
