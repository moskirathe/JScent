const CATCHCLAUSE = require("./CATCHCLAUSE");
const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");
export default class TRYSTATEMENT {
    parse(node) {
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
}