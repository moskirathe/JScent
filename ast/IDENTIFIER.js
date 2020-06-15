const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");

module.exports = class IDENTIFIER {
    parse(node) {
        this.name = node.name;
    }
}