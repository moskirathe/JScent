
module.exports = class RETURNSTATEMENT{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.argument = null;
        if(node.argument != null){
            this.argument = new EXPRESSION();
            this.argument.parse(node.argument);
        }
    }
    evaluate(table) {
        this.loc.evaluate(table);
        this.argument.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
