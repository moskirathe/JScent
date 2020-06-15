export default class LABELLEDSTATEMENT{
    parse(node){
        this.label = new IDENTIFIER();
        this.label.parse(node.label);

        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}