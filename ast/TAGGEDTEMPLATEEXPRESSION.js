
module.exports = class TAGGEDTEMPLATEEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.readonlytag = new EXPRESSION();
        this.readonlytag.parse(node["readonly tag"]);
        this.readonlyquasi= new TEMPLATELITERAL();
        this.readonlyquasi.parse(node["readonly quasi"]);
    }
}

const EXPRESSION = require("./EXPRESSION");
const TEMPLATELITERAL = require("./TEMPLATELITERAL");