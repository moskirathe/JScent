
module.exports = class BREAKSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        if (node.label !== null) {
            this.label = new IDENTIFIER();
            this.label.parse(node);
        } else {
            this.label = null;
        }
    }

    evaluate(table) {
        this.label.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
