
module.exports = class PROPERTY {
    parse(node) {
        this.loc = node.loc;
        this.key = new EXPRESSION();
        this.key.parse(node.key);
        this.computed = node.computed;
        if(node.value != null) {
            this.value = new EXPRESSION();
            this.value.parse(node.value);
        } else {
            this.value = null;
        }
        this.kind = node.kind;
        this.method = node.method;
        this.shorthand = node.shorthand;

    }
    evaluate(table) {
        this.key.evaluate(table);
        this.computed.evaluate(table);
        this.value.evaluate(table);
        this.kind.evaluate(table);
        this.method.evaluate(table);
        this.shorthand.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
