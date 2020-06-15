
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
}

const EXPRESSION = require("./EXPRESSION");
