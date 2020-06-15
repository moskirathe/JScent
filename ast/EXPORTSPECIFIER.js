// interface ExportSpecifier {
//     type: 'ExportSpecifier';
//     exported: Identifier;
//     local: Identifier;
// };

module.exports = class EXPORTSPECIFIER {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.exported = new IDENTIFIER();
        this.exported.parse(node.exported);

        this.local = new IDENTIFIER();
        this.local.parse(node.local);
    }
    evaluate(table) {
        this.exported.evaluate(table);
        this.local.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");