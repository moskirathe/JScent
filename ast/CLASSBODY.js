const METHODDEFINITION = require("./METHODDEFINITION");

module.exports = class CLASSBODY {
    parse(node) {
        this.body = [];
        for (let method of node.body) {
            let temp = new METHODDEFINITION();
            this.body.push(temp);
            temp.parse(method);
        }
    }
}