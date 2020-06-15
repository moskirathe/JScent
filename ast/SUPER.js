module.exports = class SUPER {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
    }
    evaluate(table) {
        this.loc.evaluate(table);
    }
}