
module.exports = class LITERAL {
    parse(node){
        this.loc = node.loc;
        this.value = node.value;
        this.raw = node.raw;

        if(typeof node.regex != "undefined") {
            this.regex = new REGEX();
            this.regex.parse(node.regex);
        }
    }
    evaluate(table) {
        this.value.evaluate(table);
        this.raw.evaluate(table);
        this.regex.evaluate(table);
    }
}

const REGEX = require("./REGEX");
