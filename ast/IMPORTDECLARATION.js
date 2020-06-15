export default class IMPORTDECLARATION {
    parse(node){
        this.importspecifiers = [];
        this.source = node.source;
        for(let is of node.importspecifiers){
            let temp = new IMPORTSPECIFIER(is);
            this.importspecifiers.add(is);
            temp.parse();
        }
    }
}