export default class IMPORTDECLARATION {
    parse(node){
        this.importspecifiers = [];
        this.source = node.source;
        for(let importspecifier of node.importspecifiers){
            let temp = new IMPORTSPECIFIER(importspecifier);
            this.importspecifiers.push(temp);
            temp.parse();
        }
    }
}