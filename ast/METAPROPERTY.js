
module.exports = class METAPROPERTY{
    parse(node){
        this.loc = node.loc;
        this.meta = new IDENTIFIER();
        this.meta.parse(node.meta);
        this.property = new IDENTIFIER();
        this.property.parse(node.property);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
