
module.exports = class RESTELEMENT{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.argument = null;
        if(node.argument.type === 'Identifier'){
            this.argument = new IDENTIFIER();
            this.argument.parse(node.argument);
        } else {
            this.argument = new BINDINGPATTERN();
            this.argument.parse(node.argument);
        }
    }
    evaluate(table) {
        return this.argument.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require ("./BINDINGPATTERN");
