const LITERAL = require("./LITERAL");

// interface ExportAllDeclaration {
//     type: 'ExportAllDeclaration';
//     source: Literal;
// }

module.exports = class EXPORTALLDECLARATION {
    parse(node) {
        this.source = new LITERAL();
        this.source.parse(node.source);
    }
}