const ARGUMENT = require("./ARGUMENT");
module.exports = class SPREADELEMENT {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}