
module.exports = class CLASSEXPRESSION {
    parse(node) {
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
}

const IDENTIFIER = require("./IDENTIFIER");
const CLASSBODY = require("./CLASSBODY");
