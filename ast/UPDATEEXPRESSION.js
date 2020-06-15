const ARGUMENT = require("./ARGUMENT");
export default class UPDATEEXPRESSION {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}