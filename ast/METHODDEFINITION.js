
module.exports = class METHODDEFINITION{
    parse(node){
        this.loc = node.loc;
        if(node.key != null){
            this.key = new EXPRESSION();
            this.key.parse(node.key);
        } else {
            this.key = null;
        }
        this.computed = node.computed;
        if(node.value != null){
            this.value = new FUNCTIONEXPRESSION();
            this.value.parse(node.value);
        } else {
            this.value = null;
        }
        this.kind = node.kind;
        this.static = node.static;
    }
    evaluate(table) {
        this.key.evaluate(table);
        this.computed.evaluate(table);
        this.value.evaluate(table);
        this.kind.evaluate(table);
        this.static.evaluate(table);
    }
}

const FUNCTIONEXPRESSION = require("./FUNCTIONEXPRESSION");
const EXPRESSION = require("./EXPRESSION");
