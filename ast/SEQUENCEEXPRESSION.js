
module.exports = class SEQUENCEEXPRESSION{
    parse(node){
        this.loc = node.loc;
        this.expressions = [];
        for(let expression of node.expressions){
            let temp = new EXPRESSION();
            this.expressions.push(temp);
            temp.parse(expression);
        }
    }
    evaluate(table) {
        this.loc.evaluate(table);
        for (let argument of this.expressions) {
            argument.evaluate(table);
        }
    }
}

const EXPRESSION = require ("./EXPRESSION");
