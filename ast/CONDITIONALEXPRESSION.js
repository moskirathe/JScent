
module.exports = class CONDITIONALEXPRESSION {
    parse(node) {
        this.test = new EXPRESSION();
        this.test.parse(node["test"]);
        this.consequent = new EXPRESSION();
        this.consequent.parse(node.consequent);
        this.alternate = new EXPRESSION();
        this.alternate.parse(node.alternate);
    }
}

const EXPRESSION = require("./EXPRESSION");
