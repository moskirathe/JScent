const ARGUMENT = require("./ARGUMENT");
export default class UNARYEXPRESSION {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}