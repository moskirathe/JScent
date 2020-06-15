module.exports = class DEBUGGERSTATEMENT {
    parse(node) {
        this.loc = node.loc;
    }
}