const STATEMENTLISTITEM = require("./EXPRESSION");

export default class BLOCKSTATEMENT {
    parse(node) {
        this.body = [];
        for (let item of node.body) {
            let temp = new STATEMENTLISTITEM();
            this.body.push(temp);
            temp.parse(item);
        }
    }
}