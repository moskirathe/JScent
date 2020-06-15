
module.exports = class LITERAL {
    parse(node){
        this.loc = node.loc;
        this.comments = node.comments;
        this.value = node.value;
        this.raw = node.raw;
        this.regex = null;
        if(typeof node.regex != "undefined") {
            this.regex = new REGEX();
            this.regex.parse(node.regex);
        }
    }
    evaluate(table) {
        if (this.regex) {
            this.regex.evaluate(table);
            return this.regex;
        } else {
            return this.value;
        }

    }
}

const REGEX = require("./REGEX");
