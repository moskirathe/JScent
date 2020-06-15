const EXPRESSION = require("./EXPRESSION");
const SPREADELEMENT = require("./SPREADELEMENT");

module.exports = class CALLEXPRESSION {
    parse(node) {
        this.callee = new EXPRESSION();
        this.callee.parse(node.callee);
        this.arguments = [];
        for (let argument of node.arguments) {
            if (argument.type === "SpreadElement") {
                let temp = new SPREADELEMENT();
                this.arguments.add(temp);
                temp.parse(argument);
            } else {
                let temp = new EXPRESSION();
                this.arguments.add(temp);
                temp.parse(argument);
            }
        }
    }
}