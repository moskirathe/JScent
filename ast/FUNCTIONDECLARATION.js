const IDENTIFIER = require("./IDENTIFIER");
const FUNCTIONPARAMETER = require("./FUNCTIONPARAMETER");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");

// interface FunctionDeclaration {
//     type: 'FunctionDeclaration';
//     id: Identifier | null; X
//     params: FunctionParameter[]; X
//     body: BlockStatement; X
// }

export default class FUNCTIONDECLARATION {
    parse(node) {
        this.id = new IDENTIFIER();
        this.id.parse(node.id);
        this.params = [];
        for (let param of node.params) {
            let temp = new FUNCTIONPARAMETER();
            this.params.push(temp);
            temp.parse(param);
        }
        if (node.body.type === "BlockStatement") {
            let temp = new BLOCKSTATEMENT();
            this.body = temp;
            temp.parse(node.body);
        }
    }
}