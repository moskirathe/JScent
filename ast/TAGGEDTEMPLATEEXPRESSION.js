const EXPRESSION = require("./EXPRESSION");
const TEMPLATELITERAL = require("./TEMPLATELITERAL");
module.exports = class TAGGEDTEMPLATEEXPRESSION {
    parse(node) {
        this.readonlytag = new EXPRESSION();
        this.readonlyquasi= new TEMPLATELITERAL();
    }
}