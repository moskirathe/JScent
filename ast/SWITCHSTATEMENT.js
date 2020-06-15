
module.exports = class SWITCHSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.discriminant = new EXPRESSION();
        this.discriminant.parse(node.discriminant);
        this.cases = [];
        for (let cases of node.cases) {
            let temp = new SWITCHCASE();
            this.cases.push(temp);
            temp.parse(cases);
        }
    }
    evaluate(table) {
        this.loc.evaluate(table);
        this.discriminant.evaluate(table);
        for (let argument of this.cases) {
            argument.evaluate(table);
        }
    }
}

const SWITCHCASE = require("./SWITCHCASE");
const EXPRESSION = require("./EXPRESSION");
