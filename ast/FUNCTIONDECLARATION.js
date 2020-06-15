// interface FunctionDeclaration {
//     type: 'FunctionDeclaration';
//     id: Identifier | null; X
//     params: FunctionParameter[]; X
//     body: BlockStatement; X
// }

module.exports = class FUNCTIONDECLARATION {
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

    evaluate(table) {
        let id = null;
        if (this.id) {
            id = this.id.evaluate(table);
        }
        for (let param of this.params) {
            param.evaluate(table);
        }
        this.body.evaluate(table);
        let start = this.loc.start.line;
        let end = this.loc.end.line;
        if (end - start > 50) {
            if (id) {
                table.longMethods.push({name: id, line: this.loc.start.line});
            } else {
                table.longMethods.push({name: "anonymous", line: this.loc.start.line});
            }
        }
        let counter = 0;
        for (let comment of table.comments) {
            if (comment.loc.start.line >= start && comment.loc.end.line < end) {
                counter++;
            }
        }
        if (counter > 5) {
            if (id) {
                table.commentMethods.push({name: id, line: this.loc.start.line});
            } else {
                table.commentMethods.push({name: "anonymous", line: this.loc.start.line});
            }
        }

    }
}

const IDENTIFIER = require("./IDENTIFIER");
const FUNCTIONPARAMETER = require("./FUNCTIONPARAMETER");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");