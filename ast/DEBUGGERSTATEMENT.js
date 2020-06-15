module.exports = class DEBUGGERSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
    }
    evaluate(table) {

    }
}