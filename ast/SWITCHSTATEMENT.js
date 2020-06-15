const SWITCHCASE = require("./SWITCHCASE");
export default class SWITCHSTATEMENT {
    parse(node) {
        this.discriminant = new EXPRESSION();
        //this.discriminant.parse(node.discriminant);
        this.cases = [];
        for (let cases of node.cases) {
            let temp = new SWITCHCASE();
            this.cases.push(temp);
            temp.parse(cases);
        }
    }
}