import IDENTIFIER from "./IDENTIFIER";
import OBJECTPATTERN from "./OBJECTPATTERN";

export default class RESTELEMENT{
    parse(node){
        this.argument = null;
        if(node.argument.type == 'Identifier'){
            this.argument = new IDENTIFIER();
            this.argument.parse(node.argument);
        } else {
            if(node.argument.type == 'ArrayPattern'){
                this.argument = new ARRAYPATTERN();
                } else {
                this.argument = new OBJECTPATTERN();
            }
            this.argument.parse(node.argument);
        }
    }
}