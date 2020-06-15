
module.exports = class MEMBEREXPRESSION{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.computed = node.computed;
        this.object = new EXPRESSION();
        this.object.parse(node.object);
        this.property = new EXPRESSION();
        this.property.parse(node.property);
    }

    evaluate(table) {
        let object = this.object.evaluate(table);
        let property = this.property.evaluate(table)
        table.memberCalls[object] = property;
    }
}

const EXPRESSION = require("./EXPRESSION");
