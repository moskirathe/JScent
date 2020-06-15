const ARGUMENT = require("./ARGUMENT");
module.exports = class UPDATEEXPRESSION {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}