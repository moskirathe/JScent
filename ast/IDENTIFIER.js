const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");

export default class IDENTIFIER {
    parse(node) {
        this.name = node.name;
    }
}