
module.exports = class MEMBEREXPRESSION{

    callChain = 1;

    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.computed = node.computed;
        this.long = false;
        this.object = new EXPRESSION();
        if (node.object.type.includes("MemberExpression")) {
            this.object.parse(node.object);
            this.callChain = this.object.type.getCallChain() + 1;
            if (this.getCallChain() > 2 || this.long) {
                this.long = true;
                this.callChain = 0;
            }
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
        if (this.long) {
            table.longChains.push(this.loc);
        }
        return this.object;
    }

    getCallChain() {
        return this.callChain;
    }
}

const EXPRESSION = require("./EXPRESSION");
