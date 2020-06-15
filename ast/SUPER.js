module.exports = class SUPER {
    parse(node) {
        this.loc = node.loc;
    }
    evaluate(table) {
        this.loc.evaluate(table);
    }
}