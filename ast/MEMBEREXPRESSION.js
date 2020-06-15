
module.exports = class MEMBEREXPRESSION{

    parse(node) {
        this.loc = node.loc;
        this.computed = node.computed;
        this.object = new EXPRESSION();
        if (node.property.type.includes("MemberExpression")) {
            this.object.parse(node.object);
            this.callChain = this.object.callChain + 1;
        } else {
            this.callChain = 1;
        }
        this.object.parse(node.object);
        this.property = new EXPRESSION();
        this.property.parse(node.property);
    }

    evaluate(table) {
        let object = this.object.evaluate(table);
        let property = this.property.evaluate(table);
        if (object in table.memberCalls) {
            table.memberCalls[object].push(this.loc);
        } else {
            table.memberCalls[object] = [this.loc];
        }
        if (this.callChain > 3) {
            table.longChains.push(this.loc);
        }
    }
}

const EXPRESSION = require("./EXPRESSION");
