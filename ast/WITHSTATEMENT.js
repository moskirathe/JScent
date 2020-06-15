
module.exports = class WITHSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.object = new EXPRESSION();
        this.object.parse(node["test"]);
        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}

const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");