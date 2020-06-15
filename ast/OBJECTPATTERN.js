
module.exports = class OBJECTPATTERN{
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.properties = [];
        for(let property of node.properties){
            let temp = new PROPERTY();
            this.properties.push(temp);
            temp.parse(property);
        }
    }
    evaluate(table) {
        for (let argument of this.properties) {
            argument.evaluate(table);
        }
    }
}

const PROPERTY = require("./PROPERTY");
