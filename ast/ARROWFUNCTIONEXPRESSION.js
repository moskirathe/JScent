
module.exports =  class ARROWFUNCTIONEXPRESSION {
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
        if (node.body.type === "BlockStatement") {
            let temp = new BLOCKSTATEMENT();
            this.body = temp;
            temp.parse(node.body);
        } else {
            let temp = new EXPRESSION();
            this.body = temp;
            temp.parse(node.body);
        }
    }

    evaluate(table) {
        for (let param of this.params) {
            param.evaluate(table);
        }
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const FUNCTIONPARAMETER = require("./FUNCTIONPARAMETER");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");
const EXPRESSION = require("./EXPRESSION");
