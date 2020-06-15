
module.exports = class MODULEITEM {
    parse(node) {
        if (node.type === "ImportDeclaration") {
            this.type = new IMPORTDECLARATION();
            this.type.parse(node);
        } else if (node.type === "ExportAllDeclaration") {
            this.type = new EXPORTALLDECLARATION();
            this.type.parse(node);
        } else if (node.type === "ExportDefaultDeclaration") {
            this.type = new EXPORTDEFAULTDECLARATION();
            this.type.parse(node);
        } else if (node.type === "ExportNamedDeclaration") {
            this.type = new EXPORTNAMEDDECLARATION();
            this.type.parse(node);
        } else {
            this.type = new STATEMENTLISTITEM();
            this.type.parse(node);
        }
    }

    evaluate(table) {
        this.type.evaluate(table);
    }
}

const IMPORTDECLARATION = require("./IMPORTDECLARATION");
const EXPORTALLDECLARATION = require("./EXPORTALLDECLARATION");
const EXPORTDEFAULTDECLARATION = require("./EXPORTDEFAULTDECLARATION");
const EXPORTNAMEDDECLARATION = require("./EXPORTNAMEDDECLARATION");
const STATEMENTLISTITEM = require("./STATEMENTLISTITEM");
