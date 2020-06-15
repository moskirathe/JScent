import IDENTIFIER from "./IDENTIFIER";
import BINDINGPATTERN from "./BINDINGPATTERN";

export default class RESTELEMENT{
    parse(node){
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