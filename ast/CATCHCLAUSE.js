
module.exports = class CATCHCLAUSE {
    parse(node) {
        if (node.param.type === "Identifier") {
            this.param = new IDENTIFIER();
            this.param.parse(node.param);
        } else {
            this.param = new BINDINGPATTERN();
            this.param.parse(node.param)
        }
        this.body = new BLOCKSTATEMENT();
        this.body.parse();
    }

    evaluate(table) {
        this.param.evaluate(table);
        this.body.evaluate(table);
    }
}

const IDENTIFIER = require("./IDENTIFIER");
const BINDINGPATTERN = require("./BINDINGPATTERN");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");
