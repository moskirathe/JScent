
module.exports = class BREAKSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.label !== null) {
            this.label = new IDENTIFIER();
            this.label.parse(node);
        } else {
            this.label = null;
        }
    }

    evaluate(table) {
        if (this.label) {
            this.label.evaluate(table);
        }
    }
}

const IDENTIFIER = require("./IDENTIFIER");
