
module.exports = class IMPORTSPECIFIER {
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.local = new IDENTIFIER();
        this.local.parse(node.local);

        if (typeof node.imported !== "undefined") {
            this.imported = new IDENTIFIER();
            this.imported.parse(this.imported);
        }
    }
    evaluate(table) {
        this.local.evaluate(table);
        this.imported.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
