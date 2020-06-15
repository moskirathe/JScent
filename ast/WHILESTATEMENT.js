
module.exports = class WHILESTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.test = new EXPRESSION();
        this.test.parse(node["test"]);
        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");