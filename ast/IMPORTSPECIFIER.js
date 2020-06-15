export default class IMPORTSPECIFIER {
    parse(node){
        this.type = node.type;
        this.local = node.local;
        this.imported = node.imported;
    }
}