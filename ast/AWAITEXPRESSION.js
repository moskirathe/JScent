const EXPRESSION = require("./EXPRESSION");

export default class AWAITEXPRESSION {
    parse(node) {
        this.argument = new EXPRESSION();
        this.argument.parse(node.argument);
    }
}