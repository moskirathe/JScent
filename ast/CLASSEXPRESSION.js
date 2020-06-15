
module.exports = class CLASSEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.id !== null) {
            this.id = new IDENTIFIER();
            this.id.parse(node.id);
        } else {
            this.id = null;
        }
        if (node.superClass !== null) {
            this.superClass = new IDENTIFIER();
            this.superClass.parse(node.superClass);
        } else {
            this.superClass = null;
        }
        this.body = new CLASSBODY();
        this.body.parse(node.body);
    }
    evaluate(table) {
        this.id.evaluate(table);
        this.superClass.evaluate(table);
        this.body.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const CLASSBODY = require("./CLASSBODY");
