const ARRAYPATTERN = require("./ARRAYPATTERN");
const OBJECTPATTERN = require("./OBJECTPATTERN");

export default class BINDINGPATTERN {
    parse(node) {
        if (node.type === "ObjectPattern") {
            this.pattern = new OBJECTPATTERN();
            this.pattern.parse(node);
        } else {
            this.pattern = new ARRAYPATTERN();
            this.pattern.parse(node);
        }
    }
}