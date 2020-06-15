const ARGUMENT = require("./ARGUMENT");
module.exports = class THROWSTATEMENT {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}