module.exports = class TEMPLATEELEMENT {
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.value = node.value;
    }
    evaluate(table) {

    }
}