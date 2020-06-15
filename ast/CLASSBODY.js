
module.exports = class CLASSBODY {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.body = [];
        for (let method of node.body) {
            let temp = new METHODDEFINITION();
            this.body.push(temp);
            temp.parse(method);
        }
    }

    evaluate(table) {
        let start = this.loc.start.line;
        let end = this.loc.end.line;
        if (this.body.length > 20 || end - start > 250) {
            table.largeClasses.push(this.loc);
        }
        for (let item of this.body) {
            item.evaluate(table);
        }
    }
}

const METHODDEFINITION = require("./METHODDEFINITION");
