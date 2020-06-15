
module.exports = class WHILESTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.test = new EXPRESSION();
        this.test.parse(node["test"]);
        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
    evaluate(table) {
        this.loc.evaluate(table);
        this.test.evaluate(table);
        this.body.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");