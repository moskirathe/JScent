const EXPRESSION = require("./EXPRESSION");
export default class YIELDEXPRESSION {
    parse(node) {
        if (node.argument !== null) {
            this.argument = new EXPRESSION ();
            this.argument.parse(node.init);
        } else {
            this.argument = null;
        }
    }
}