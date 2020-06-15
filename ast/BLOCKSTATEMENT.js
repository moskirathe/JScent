module.exports = class BLOCKSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.body = [];
        for (let item of node.body) {
            let temp = new STATEMENTLISTITEM();
            this.body.push(temp);
            temp.parse(item);
        }
    }

    evaluate(table) {
        for (let item of this.body) {
            item.evaluate(table);
        }
    }
}

const STATEMENTLISTITEM = require("./STATEMENTLISTITEM");
