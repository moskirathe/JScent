
module.exports = class SWITCHCASE {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
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
    evaluate(table) {
        if (this.test) {
            this.test.evaluate(table);
        }
        for (let argument of this.consequent) {
            argument.evaluate(table);
        }
    }
}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");
