export default class ARRAYEXPRESSION {
    parse(node) {
        this.elements = [];
        for (let elem of node.elements) {
            if (elem.type === "SpreadElement") {
                let temp = new SPREADELEMENT(elem);
                this.elements.add(temp);
                temp.parse();
            } else {
                let temp = new EXPRESSION(elem)
                this.elements.add(temp);
            }
        }
    }
}