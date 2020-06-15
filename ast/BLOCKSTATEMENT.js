const STATEMENTLISTITEM = require("./EXPRESSION");

module.exports = class BLOCKSTATEMENT {
    parse(node) {
        this.body = [];
        for (let item of node.body) {
            let temp = new STATEMENTLISTITEM();
            this.body.push(temp);
            temp.parse(item);
        }
    }
}