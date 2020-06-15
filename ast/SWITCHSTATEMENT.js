
module.exports = class SWITCHSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.discriminant = new EXPRESSION();
        this.discriminant.parse(node.discriminant);
        this.cases = [];
        for (let cases of node.cases) {
            let temp = new SWITCHCASE();
            this.cases.push(temp);
            temp.parse(cases);
        }
    }
}

const SWITCHCASE = require("./SWITCHCASE");
const EXPRESSION = require("./EXPRESSION");
