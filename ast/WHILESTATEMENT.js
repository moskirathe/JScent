const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");
export default class WHILESTATEMENT {
    parse(node) {
        this.test = new EXPRESSION();
        this.test.parse(node.test);
        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}