module.exports = class REGEX {
    parse(node){
        this.loc = node.loc;
        this.pattern = node.pattern;
        this.flags = node.flags;
    }
}