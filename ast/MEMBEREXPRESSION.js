module.exports = class MEMBEREXPRESSION{
    parse(node){
        this.computed = node.computed;
        this.object = new EXPRESSION();
        this.object.parse(node.object);
        this.property = new EXPRESSION();
        this.property.parse(node.property);
    }
}