
// interface EmptyStatement {
//     type: 'EmptyStatement';
// }

module.exports =  class EMPTYSTATEMENT {
    parse(node) {
        this.loc = node.loc;
    }
}