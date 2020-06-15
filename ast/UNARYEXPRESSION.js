const ARGUMENT = require("./ARGUMENT");
module.exports = class UNARYEXPRESSION {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}