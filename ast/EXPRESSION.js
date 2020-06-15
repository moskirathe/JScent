//type Expression = ThisExpression | Identifier | Literal |
//    ArrayExpression | ObjectExpression | FunctionExpression | ArrowFunctionExpression | ClassExpression |
//    TaggedTemplateExpression | MemberExpression | Super | MetaProperty |
//    NewExpression | CallExpression | UpdateExpression | AwaitExpression | UnaryExpression |
//    BinaryExpression | LogicalExpression | ConditionalExpression |
//    YieldExpression | AssignmentExpression | SequenceExpression;

module.exports = class EXPRESSION {
    parse(node) {
        switch(node.type) {
            case ("ThisExpression"):
                this.type = new THISEXPRESSION();
                this.type.parse(node);
                break;
            case ("Identifier"):
                this.type = new IDENTIFIER();
                this.type.parse(node);
                break;
            case ("Literal"):
                this.type = new LITERAL();
                this.type.parse(node);
                break;
            case ("ArrayExpression"):
                this.type = new ARRAYEXPRESSION();
                this.type.parse(node);
                break;
            case ("ObjectExpression"):
                this.type = new OBJECTEXPRESSION();
                this.type.parse(node);
                break;
            case ("FunctionExpression"):
                this.type = new FUNCTIONEXPRESSION();
                this.type.parse(node);
                break;
            case ("ArrowFunctionExpression"):
                this.type = new ARROWFUNCTIONEXPRESSION();
                this.type.parse(node);
                break;
            case ("ClassExpression"):
                this.type = new CLASSEXPRESSION();
                this.type.parse(node);
                break;
            case ("TaggedTemplateExpression"):
                this.type = new TAGGEDTEMPLATEEXPRESSION();
                this.type.parse(node);
                break;
            case ("MemberExpression"):
                this.type = new MEMBEREXPRESSION();
                this.type.parse(node);
                break;
            case ("Super"):
                this.type = new SUPER();
                this.type.parse(node);
                break;
            case ("MetaProperty"):
                this.type = new METAPROPERTY();
                this.type.parse(node);
                break;
            case ("NewExpression"):
                this.type = new NEWEXPRESSION();
                this.type.parse(node);
                break;
            case ("CallExpression"):
                this.type = new CALLEXPRESSION();
                this.type.parse(node);
                break;
            case ("UpdateExpression"):
                this.type = new UPDATEEXPRESSION();
                this.type.parse(node);
                break;
            case ("AwaitExpression"):
                this.type = new AWAITEXPRESSION();
                this.type.parse(node);
                break;
            case ("UnaryExpression"):
                this.type = new UNARYEXPRESSION();
                this.type.parse(node);
                break;
            case ("BinaryExpression"):
                this.type = new BINARYEXPRESSION();
                this.type.parse(node);
                break;
            case ("LogicalExpression"):
                this.type = new LOGICALEXPRESSION();
                this.type.parse(node);
                break;
            case ("ConditionalExpression"):
                this.type = new CONDITIONALEXPRESSION();
                this.type.parse(node);
                break;
            case ("YieldExpression"):
                this.type = new YIELDEXPRESSION();
                this.type.parse(node);
                break;
            case ("AssignmentExpression"):
                this.type = new ASSIGNMENTEXPRESSION();
                this.type.parse(node);
                break;
            case ("SequenceExpression"):
                this.type = new SEQUENCEEXPRESSION();
                this.type.parse(node);
                break;
            default:
                this.type = null;
        }
    }

    evaluate(table) {
        this.type.evaluate(table);
    }
}

const THISEXPRESSION = require("./THISEXPRESSION");
const IDENTIFIER = require("./IDENTIFIER");
const LITERAL = require("./LITERAL");
const ARRAYEXPRESSION = require("./ARRAYEXPRESSION");
const OBJECTEXPRESSION = require("./OBJECTEXPRESSION");
const FUNCTIONEXPRESSION = require("./FUNCTIONEXPRESSION");
const ARROWFUNCTIONEXPRESSION = require("./ARROWFUNCTIONEXPRESSION");
const CLASSEXPRESSION = require("./CLASSEXPRESSION");
const TAGGEDTEMPLATEEXPRESSION = require("./TAGGEDTEMPLATEEXPRESSION");
const MEMBEREXPRESSION = require("./MEMBEREXPRESSION");
const SUPER = require("./SUPER");
const METAPROPERTY = require("./METAPROPERTY");
const NEWEXPRESSION = require("./NEWEXPRESSION");
const CALLEXPRESSION = require("./CALLEXPRESSION");
const UPDATEEXPRESSION = require("./UPDATEEXPRESSION");
const AWAITEXPRESSION = require("./AWAITEXPRESSION");
const UNARYEXPRESSION = require("./UNARYEXPRESSION");
const BINARYEXPRESSION = require("./BINARYEXPRESSION");
const LOGICALEXPRESSION = require("./LOGICALEXPRESSION");
const CONDITIONALEXPRESSION = require("./CONDITIONALEXPRESSION");
const YIELDEXPRESSION = require("./YIELDEXPRESSION");
const ASSIGNMENTEXPRESSION = require("./ASSIGNMENTEXPRESSION");
const SEQUENCEEXPRESSION = require("./SEQUENCEEXPRESSION");