
// interface FunctionExpression {
//     type: 'FunctionExpression';
//     id: Identifier | null; X
//     params: FunctionParameter[]; X
//     body: BlockStatement; X
// }

module.exports = class FUNCTIONEXPRESSION {
    parse(node) {
        this.loc = node.loc;
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
}

const IDENTIFIER = require("./IDENTIFIER");
const FUNCTIONPARAMETER = require("./FUNCTIONPARAMETER");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");

