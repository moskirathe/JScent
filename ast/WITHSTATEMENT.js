
module.exports = class WITHSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.object = new EXPRESSION();
        this.object.parse(node["test"]);
        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
    evaluate(table) {
        this.loc.evaluate(table);
        this.object.evaluate(table);
        this.body.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");