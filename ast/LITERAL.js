export default class LITERAL {
    parse(node){
        this.value = node.value;
        this.raw = node.raw;
        
        // undefined if regex is not defined in node
        this.regex = node.regex;

    }
}