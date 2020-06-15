
module.exports = class LABELLEDSTATEMENT{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.label = new IDENTIFIER();
        this.label.parse(node.label);

        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
    evaluate(table) {
        this.label.evaluate(table);
        this.body.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const STATEMENT = require("./STATEMENT");
