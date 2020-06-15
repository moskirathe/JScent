module.exports = class THISEXPRESSION {
    parse(node){
        this.loc = node.loc;
    }
    evaluate(table) {
        this.loc.evaluate(table);
    }
}