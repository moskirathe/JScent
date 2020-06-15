
module.exports = class LABELLEDSTATEMENT{
    parse(node){
        this.loc = node.loc;
        this.label = new IDENTIFIER();
        this.label.parse(node.label);

        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const STATEMENT = require("./STATEMENT");
