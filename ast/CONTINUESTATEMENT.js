module.exports = class CONTINUESTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
    }
    evaluate(table) {

    }
}