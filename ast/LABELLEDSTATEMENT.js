export default class LABELLEDSTATEMENT{
    parse(node){
        this.label = node.label;
        this.body = node.body;
    }
}