
module.exports = class PROPERTY {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
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
        if (this.value) {
            this.value.evaluate(table);
        }
    }
}

const EXPRESSION = require("./EXPRESSION");
