module.exports = class TEMPLATEELEMENT {
    parse(node){
        this.loc = node.loc;
        this.value = node.value;
    }
}