const ARGUMENT = require("./ARGUMENT");
export default class SPREADELEMENT {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}