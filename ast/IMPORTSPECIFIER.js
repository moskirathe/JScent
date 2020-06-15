
module.exports = class IMPORTSPECIFIER {
    parse(node){
        this.local = new IDENTIFIER();
        this.local.parse(node.local);

        if (typeof node.imported !== "undefined") {
            this.imported = new IDENTIFIER();
            this.imported.parse(this.imported);
        }
    }
}

const IDENTIFIER = require("./IDENTIFIER");
