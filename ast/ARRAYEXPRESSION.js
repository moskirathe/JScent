module.exports = class ARRAYEXPRESSION {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.elements = [];
        for (let elem of node.elements) {
            if (elem.type === "SpreadElement") {
                let temp = new SPREADELEMENT();
                this.elements.push(temp);
                temp.parse(elem);
            } else {
                let temp = new EXPRESSION();
                this.elements.push(temp);
                temp.parse(elem);
            }
        }
    }

    evaluate(table) {
        for (let elem of this.elements) {
            elem.evaluate(table);
        }
    }
}

const SPREADELEMENT = require("./SPREADELEMENT");
const EXPRESSION = require("./EXPRESSION");
