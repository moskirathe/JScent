
module.exports = class CALLEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.callee = new EXPRESSION();
        this.callee.parse(node.callee);
        this.arguments = [];
        for (let argument of node.arguments) {
            if (argument.type === "SpreadElement") {
                let temp = new SPREADELEMENT();
                this.arguments.push(temp);
                temp.parse(argument);
            } else {
                let temp = new EXPRESSION();
                this.arguments.push(temp);
                temp.parse(argument);
            }
        }
    }

    evaluate(table) {
        for (let argument of this.arguments) {
            argument.evaluate(table);
        }
        return this.callee.evaluate(table);
    }
}

const EXPRESSION = require("./EXPRESSION");
const SPREADELEMENT = require("./SPREADELEMENT");
