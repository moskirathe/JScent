// interface FunctionDeclaration {
//     type: 'FunctionDeclaration';
//     id: Identifier | null; X
//     params: FunctionParameter[]; X
//     body: BlockStatement; X
// }

module.exports = class FUNCTIONDECLARATION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.id !== null) {
            this.id = new IDENTIFIER();
            this.id.parse(node.id);
        } else {
            this.id = null;
        }
        this.params = [];
        for (let param of node.params) {
            let temp = new FUNCTIONPARAMETER();
            this.params.push(temp);
            temp.parse(param);
        }
        let temp = new BLOCKSTATEMENT();
        this.body = temp;
        temp.parse(node.body);
    }
    evaluate(table) {
        this.id.evaluate(table);
        for (let argument of this.params) {
            argument.evaluate(table);
        }
        this.body.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const FUNCTIONPARAMETER = require("./FUNCTIONPARAMETER");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");