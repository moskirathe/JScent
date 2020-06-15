
module.exports = class TAGGEDTEMPLATEEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.readonlytag = new EXPRESSION();
        this.readonlytag.parse(node["readonly tag"]);
        this.readonlyquasi= new TEMPLATELITERAL();
        this.readonlyquasi.parse(node["readonly quasi"]);
    }
    evaluate(table) {
        this.loc.evaluate(table);
        this.readonlytag.evaluate(table);
        this.readonlyquasi.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
const TEMPLATELITERAL = require("./TEMPLATELITERAL");