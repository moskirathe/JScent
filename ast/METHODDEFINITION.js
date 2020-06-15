module.exports = class METHODDEFINITION{
    parse(node){
        if(node.key != null){
            this.key = new EXPRESSION();
            this.key.parse(node.key);
        }
        this.computed = node.computed;
        if(node.value != null){
            this.value = new FUNCTIONEXPRESSION();
            this.value.parse(node.value);
        }
        this.kind = node.kind;
        this.static = node.static;
    }
}