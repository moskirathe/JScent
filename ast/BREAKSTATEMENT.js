const IDENTIFIER = require("./IDENTIFIER");

module.exports = class BREAKSTATEMENT {
    parse(node) {
        if (node.label !== null) {
            this.label = new IDENTIFIER();
            this.label.parse(node);
        } else {
            this.label = null;
        }
    }
}