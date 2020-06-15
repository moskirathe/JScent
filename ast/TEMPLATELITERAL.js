import TEMPLATEELEMENT from "./TEMPLATEELEMENT";
const EXPRESSION = require("./EXPRESSION");

module.exports = class TEMPLATELITERAL {
    parse(node){
        this.quasis = [];
        for (let quasis of node.quasis) {
            let temp = new TEMPLATEELEMENT();
            this.quasis.push(temp);
            temp.parse(quasis);
        }
        this.expressions = [];
        for (let expressions of node.expressions) {
            let temp = new EXPRESSION();
            this.expressions.push(temp);
            temp.parse(expressions);
        }
    }
}