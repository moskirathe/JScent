
module.exports = class IMPORTDECLARATION {
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.specifiers = [];
        for(let specifier of node.specifiers){
            let temp = new IMPORTSPECIFIER();
            this.specifiers.push(temp);
            temp.parse(specifier);
        }
        this.source = new LITERAL();
        this.source.parse(node.source);
    }
    evaluate(table) {
        for (let argument of this.specifiers) {
            argument.evaluate(table);
        }
        this.source.evaluate(table);
    }
}

const LITERAL = require("./LITERAL");
const IMPORTSPECIFIER = require("./IMPORTSPECIFIER");
