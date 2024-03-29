
module.exports = class CONDITIONALEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.test = new EXPRESSION();
        this.test.parse(node["test"]);
        this.consequent = new EXPRESSION();
        this.consequent.parse(node.consequent);
        this.alternate = new EXPRESSION();
        this.alternate.parse(node.alternate);
    }
    evaluate(table) {
        this.test.evaluate(table);
        this.consequent.evaluate(table);
        this.alternate.evaluate(table);

    }
}

const EXPRESSION = require("./EXPRESSION");
