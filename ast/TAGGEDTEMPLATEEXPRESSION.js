const EXPRESSION = require("./EXPRESSION");
const TEMPLATELITERAL = require("./TEMPLATELITERAL");
export default class TAGGEDTEMPLATEEXPRESSION {
    parse(node) {
        this.readonlytag = new EXPRESSION();
        this.readonlyquasi= new TEMPLATELITERAL();
    }
}