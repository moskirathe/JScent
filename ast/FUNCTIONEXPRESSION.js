
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

        evaluate (table) {
        let id = null;
            if (this.id) {
                id = this.id.evaluate(table);
            }
            for (let param of this.params) {
                param.evaluate(table);
            }
            this.body.evaluate(table);
            if (this.loc.end.line - this.loc.start.line > 50) {
                if (id) {
                    table.longMethods.push({name: id, line: this.loc.start.line});
                } else {
                    table.longMethods.push({name: "anonymous", line: this.loc.start.line});
                }
            }
            if (this.loc.comments.length > 5) {
                if (id) {
                    table.longMethods.push({name: id, line: this.loc.start.line});
                } else {
                    table.longMethods.push({name: "anonymous", line: this.loc.start.line});
                }
            }
        }
}

const IDENTIFIER = require("./IDENTIFIER");
const FUNCTIONPARAMETER = require("./FUNCTIONPARAMETER");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");

