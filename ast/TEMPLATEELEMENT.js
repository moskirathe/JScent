module.exports = class TEMPLATEELEMENT {
    parse(node){
        this.loc = node.loc;
        this.value = node.value;
    }
    evaluate(table) {
        this.loc.evaluate(table);
        this.value.evaluate(table);
    }
}