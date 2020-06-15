
module.exports = class TEMPLATELITERAL {
    parse(node){
        this.loc = node.loc;
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
    evaluate(table) {
        this.loc.evaluate(table);
        for (let argument of this.quasis) {
            argument.evaluate(table);
        }
        for (let argument of this.expressions) {
            argument.evaluate(table);
        }
    }
}

const TEMPLATEELEMENT = require ("./TEMPLATEELEMENT");
const EXPRESSION = require("./EXPRESSION");
