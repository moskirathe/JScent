
module.exports = class MEMBEREXPRESSION{

    callChain = 1;

    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.computed = node.computed;
        this.object = new EXPRESSION();
        if (node.object.type.includes("MemberExpression")) {
            this.object.parse(node.object);
            this.callChain = this.object.type.getCallChain() + 1;
        } else {
            this.object.parse(node.object);
        }
        this.object.parse(node.object);
        this.property = new EXPRESSION();
        this.property.parse(node.property);
    }

    evaluate(table) {
        let object = this.object.evaluate(table);
        if (object in table.memberCalls) {
            table.memberCalls[object].push(this.loc);
        } else {
            table.memberCalls[object] = [this.loc];
        }
        if (this.callChain > 3) {
            table.longChains.push(this.loc);
        }
        return this.object;
    }

    getCallChain() {
        return this.callChain;
    }
}

const EXPRESSION = require("./EXPRESSION");
