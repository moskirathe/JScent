
module.exports = class TRYSTATEMENT {
    parse(node) {
        this.loc = node.loc;
        this.comments = node.comments;
        this.block = new BLOCKSTATEMENT();
        this.block.parse(node.block);
        if (node.handler !== null) {
            this.handler = new CATCHCLAUSE();
            this.handler.parse(node.handler);
        } else {
            this.handler = null;
        }
        if (node.finalizer !== null) {
            this.finalizer = new BLOCKSTATEMENT();
            this.finalizer.parse(node.finalizer);
        } else {
            this.finalizer = null;
        }
    }
    evaluate(table) {

        this.block.evaluate(table);
        if (this.handler) {
            this.handler.evaluate(table);
        }
        if (this.finalizer) {
            this.finalizer.evaluate(table);
        }
    }
}

const CATCHCLAUSE = require("./CATCHCLAUSE");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");
