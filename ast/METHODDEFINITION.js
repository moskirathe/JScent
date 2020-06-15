
module.exports = class METHODDEFINITION{
    parse(node){
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
}

const FUNCTIONEXPRESSION = require("./FUNCTIONEXPRESSION");
const EXPRESSION = require("./EXPRESSION");
