import EXPRESSION from "./EXPRESSION";

export default class SEQUENCEEXPRESSION{
    parse(node){
        this.expressions = [];
        for(let expression of node.expressions){
            let temp = new EXPRESSION();
            this.expressions.push(temp);
            temp.parse(expression);
        }
    }
}