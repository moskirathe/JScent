
module.exports = class RESTELEMENT{
    parse(node){
        this.loc = node.loc;
        this.argument = null;
        if(node.argument.type === 'Identifier'){
            this.argument = new IDENTIFIER();
            this.argument.parse(node.argument);
        } else {
            this.argument = new BINDINGPATTERN();
            this.argument.parse(node.argument);
        }
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require ("./BINDINGPATTERN");
