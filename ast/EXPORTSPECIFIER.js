const IDENTIFIER = require("./IDENTIFIER");
// interface ExportSpecifier {
//     type: 'ExportSpecifier';
//     exported: Identifier;
//     local: Identifier;
// };

export default class EXPORTSPECIFIER {
    parse(node) {
        this.exported = new IDENTIFIER();
        this.exported.parse(node.exported);

        this.local = new IDENTIFIER();
        this.local.parse(node.local);
    }
}