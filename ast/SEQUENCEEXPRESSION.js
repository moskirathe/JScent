const EXPRESSION = require ("./EXPRESSION");

module.exports = class SEQUENCEEXPRESSION{
    parse(node){
        this.expressions = [];
        for(let expression of node.expressions){
            let temp = new EXPRESSION();
            this.expressions.push(temp);
            temp.parse(expression);
        }
    }
}