const REGEX = require("./REGEX");

module.exports = class LITERAL {
    parse(node){
        this.value = node.value;
        this.raw = node.raw;

        if(typeof node.regex != "undefined") {
            this.regex = new REGEX();
            this.regex.parse(node.regex);
        }
    }
}