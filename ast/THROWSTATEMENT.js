const ARGUMENT = require("./ARGUMENT");
export default class THROWSTATEMENT {
    parse(node) {
        this.argument = new ARGUMENT();
        this.argument.parse(node.argument);
    }
}