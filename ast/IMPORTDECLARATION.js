module.exports = class IMPORTDECLARATION {
    parse(node){
        this.importspecifiers = [];
        for(let importspecifier of node.importspecifiers){
            let temp = new IMPORTSPECIFIER();
            this.importspecifiers.push(temp);
            temp.parse(importspecifier);
        }
        this.source = new LITERAL();
        this.source.parse(node.source);
    }
}