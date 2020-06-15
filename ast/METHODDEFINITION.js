
module.exports = class METHODDEFINITION{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
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
        if (this.key !== null) {
            this.key.evaluate(table);
        }
        if (this.value !== null) {
            return this.value.evaluate(table);
        }
    }
}

const FUNCTIONEXPRESSION = require("./FUNCTIONEXPRESSION");
const EXPRESSION = require("./EXPRESSION");
