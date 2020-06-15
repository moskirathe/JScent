import TEMPLATEELEMENT from "./TEMPLATEELEMENT";
const EXPRESSION = require("./EXPRESSION");

module.exports = class TEMPLATELITERAL {
    parse(node){
        this.quasis = [];
        for (let quasi of node.quasis) {
            let temp = new TEMPLATEELEMENT();
            this.quasis.push(temp);
            temp.parse(quasi);
        }
        this.expressions = [];
        for (let expression of node.expressions) {
            let temp = new EXPRESSION();
            this.expressions.push(temp);
            temp.parse(expression);
        }
    }
}