
// interface ExportAllDeclaration {
//     type: 'ExportAllDeclaration';
//     source: Literal;
// }

module.exports = class EXPORTALLDECLARATION {
    parse(node) {
        this.loc = node.loc;
        this.source = new LITERAL();
        this.source.parse(node.source);
    }
    evaluate(table) {
        this.source.evaluate(table);
    }
}

const LITERAL = require("./LITERAL");
