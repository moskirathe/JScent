
module.exports = class IMPORTSPECIFIER {
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.local = new IDENTIFIER();
        this.local.parse(node.local);

        if (typeof node.imported !== "undefined") {
            this.imported = new IDENTIFIER();
            this.imported.parse(this.imported);
        } else {
            this.imported = null;
        }
    }
    evaluate(table) {
        let local = this.local.evaluate(table);
        if (this.imported) {
            let imported = this.imported.evaluate(table);
        }
        table.imports[local] = this.loc;
    }
}

const IDENTIFIER = require("./IDENTIFIER");
