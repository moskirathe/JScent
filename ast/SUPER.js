module.exports = class SUPER {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
    }
}