
module.exports = class VARIABLEDECLARATOR {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        if (node.id.type === "Identifier") {
            let temp = new IDENTIFIER();
            this.id = temp;
            temp.parse(node.id);
        } else {
            let temp = new BINDINGPATTERN();
            this.id = temp;
            temp.parse(node.id);
        }
        if (node.init !== null) {
            this.init = new EXPRESSION();
            this.init.parse(node.init);
        } else {
            this.init = null;
        }
    }

    evaluate(table) {
        let id = this.id.evaluate(table);
        let init = this.init
        if (this.init) {
            init = this.init.evaluate(table);
        }
        table.defined[id] = init;
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");
const EXPRESSION = require("./EXPRESSION");