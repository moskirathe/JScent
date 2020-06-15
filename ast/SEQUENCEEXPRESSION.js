export default class SEQUENCEEXPRESSION{
    parse(node){
        this.arguments = [];
        for(let expression of node.expressions){
            let temp = new EXPRESSION();
            this.arguments.push(temp);
            temp.parse(expression);
        }
    }
}