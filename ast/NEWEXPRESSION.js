import SPREADELEMENT from "./SPREADELEMENT";

module.exports = class NEWEXPRESSION{
    parse(node){
        this.callee = new EXPRESSION();
        this.callee.parse(node.callee);
        this.arguments = [];
        for(let arg of node.arguments){
            let temp = null;
            if(arg.type === 'SpreadElement'){
                temp = new SPREADELEMENT();
            } else {
                temp = new EXPRESSION();
            }
            this.arguments.push(temp);
            temp.parse(arg);
        }
    }
}