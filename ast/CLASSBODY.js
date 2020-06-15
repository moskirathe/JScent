
module.exports = class CLASSBODY {
    parse(node) {
        this.body = [];
        for (let method of node.body) {
            let temp = new METHODDEFINITION();
            this.body.push(temp);
            temp.parse(method);
        }
    }

    evaluate(table) {
        for (let item of this.body) {
            item.evaluate(table);
        }
    }
}

const METHODDEFINITION = require("./METHODDEFINITION");
