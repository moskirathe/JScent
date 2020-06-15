
module.exports = class BINDINGPATTERN {
    parse(node) {
        if (node.type === "ObjectPattern") {
            this.pattern = new OBJECTPATTERN();
            this.pattern.parse(node);
        } else {
            this.pattern = new ARRAYPATTERN();
            this.pattern.parse(node);
        }
    }

    evaluate(table) {
        this.pattern.evaluate(table);
    }
}

const ARRAYPATTERN = require("./ARRAYPATTERN");
const OBJECTPATTERN = require("./OBJECTPATTERN");
