const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");
const EXPRESSION = require("./EXPRESSION");
module.exports = class VARIABLEDECLARATOR {
    parse(node) {
        if (node.id.type === "BlockStatement") {
            let temp = new IDENTIFIER ();
            this.id = temp;
            temp.parse(node.id);
        } else {
            let temp = new BINDINGPATTERN();
            this.id = temp;
            temp.parse(node.id);
        }
        if (node.init !== null) {
            this.init = new EXPRESSION ();
            this.init.parse(node.init);
        } else {
            this.init = null;
        }
    }
}