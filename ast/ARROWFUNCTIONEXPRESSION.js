const IDENTIFIER = require("./IDENTIFIER");
const FUNCTIONPARAMETER = require("./FUNCTIONPARAMETER");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");
const EXPRESSION = require("./EXPRESSION");

export default class ARROWFUNCTIONEXPRESSION {
    parse(node) {
        this.elements = [];
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
        } else {
            let temp = new EXPRESSION();
            this.body = temp;
            temp.parse(node.body);
        }
    }
}