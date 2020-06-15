
module.exports = class NEWEXPRESSION{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
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
    evaluate(table) {
        for (let argument of this.arguments) {
            argument.evaluate(table);
        }
        return this.callee.evaluate(table);
    }
}

const SPREADELEMENT = require("./SPREADELEMENT");
const EXPRESSION = require("./EXPRESSION");
