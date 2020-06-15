
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
}

const EXPRESSION = require ("./EXPRESSION");
