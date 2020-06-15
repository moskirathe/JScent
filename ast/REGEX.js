module.exports = class REGEX {
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.pattern = node.pattern;
        this.flags = node.flags;
    }
    evaluate(table) {
        return this.pattern;
    }
}