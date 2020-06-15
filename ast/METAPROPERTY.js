
module.exports = class METAPROPERTY{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.meta = new IDENTIFIER();
        this.meta.parse(node.meta);
        this.property = new IDENTIFIER();
        this.property.parse(node.property);
    }
    evaluate(table) {
        this.meta.evaluate(table);
        this.property.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
