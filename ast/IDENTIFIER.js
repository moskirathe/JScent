module.exports = class IDENTIFIER {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.name = node.name;
    }
    evaluate(table) {
        if (this.name in table.used) {
            table.used[this.name]++;
        } else {
            table.used[this.name] = 1;
        }
        return this.name;
    }
}