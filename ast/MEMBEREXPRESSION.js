
module.exports = class MEMBEREXPRESSION{
    parse(node){
        this.computed = node.computed;
        this.object = new EXPRESSION();
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
    }
}

const EXPRESSION = require("./EXPRESSION");
