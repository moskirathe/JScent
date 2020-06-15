module.exports = class IDENTIFIER {
    parse(node) {
        this.loc = node.loc;
        this.name = node.name;
    }
    evaluate(table) {
        this.name.evaluate(table);
    }
}