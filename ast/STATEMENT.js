const BLOCKSTATEMENT = require("./BLOCKSTATEMENT");
const BREAKSTATEMENT = require("./BREAKSTATEMENT");
const CONTINUESTATEMENT = require("./CONTINUESTATEMENT");
const DEBUGGERSTATEMENT = require("./DEBUGGERSTATEMENT");
const DOWHILESTATEMENT = require("./DOWHILESTATMENT");
const EMPTYSTATEMENT = require("./EMPTYSTATEMENT");
const EXPRESSIONSTATEMENT = require("./EXPRESSIONSTATEMENT");
const FORSTATEMENT = require("./FORSTATEMENT");
const FORINSTATEMENT = require("./FORINSTATEMENT");
const FOROFSTATEMENT = require("./FOROFSTATEMENT");
const FUNCTIONDECLARATION = require("./FUNCTIONDECLARATION");
const IFSTATEMENT = require("./IFSTATEMENT");
const LABELLEDSTATEMENT = require("./LABELLEDSTATEMENT");
const RETURNSTATEMENT = require("./RETURNSTATEMENT");
const SWITCHSTATEMENT = require("./SWITCHSTATEMENT");
const THROWSTATEMENT = require("./THROWSTATEMENT");
const TRYSTATEMENT = require("./TRYSTATEMENT");
const VARIABLEDECLARATION = require("./VARIABLEDECLARATION");
const WHILESTATEMENT = require("./WHILESTATEMENT");
const WITHSTATEMENT = require("./WITHSTATEMENT");

//type Statement = BlockStatement | BreakStatement | ContinueStatement |
//     DebuggerStatement | DoWhileStatement | EmptyStatement |
//     ExpressionStatement | ForStatement | ForInStatement |
//     ForOfStatement | FunctionDeclaration | IfStatement |
//     LabeledStatement | ReturnStatement | SwitchStatement |
//     ThrowStatement | TryStatement | VariableDeclaration |
//     WhileStatement | WithStatement;

module.exports = class STATEMENT {
    parse(node) {
        switch(node.type) {
            case ("BlockStatement"):
                this.type = new BLOCKSTATEMENT();
                this.type.parse(node);
                break;
            case ("BreakStatement"):
                this.type = new BREAKSTATEMENT();
                this.type.parse(node);
                break;
            case ("ContinueStatement"):
                this.type = new CONTINUESTATEMENT();
                this.type.parse(node);
                break;
            case ("DebuggerStatement"):
                this.type = new DEBUGGERSTATEMENT();
                this.type.parse(node);
                break;
            case ("DoWhileStatement"):
                this.type = new DOWHILESTATEMENT();
                this.type.parse(node);
                break;
            case ("EmptyStatement"):
                this.type = new EMPTYSTATEMENT();
                this.type.parse(node);
                break;
            case ("ExpressionStatement"):
                this.type = new EXPRESSIONSTATEMENT();
                this.type.parse(node);
                break;
            case ("ForStatement"):
                this.type = new FORSTATEMENT();
                this.type.parse(node);
                break;
            case ("ForInStatement"):
                this.type = new FORINSTATEMENT();
                this.type.parse(node);
                break;
            case ("ForOfStatement"):
                this.type = new FOROFSTATEMENT();
                this.type.parse(node);
                break;
            case ("FunctionDeclaration"):
                this.type = new FUNCTIONDECLARATION();
                this.type.parse(node);
                break;
            case ("IfStatement"):
                this.type = new IFSTATEMENT();
                this.type.parse(node);
                break;
            case ("LabelledStatement"):
                this.type = new LABELLEDSTATEMENT();
                this.type.parse(node);
                break;
            case ("ReturnStatement"):
                this.type = new RETURNSTATEMENT();
                this.type.parse(node);
                break;
            case ("SwitchStatement"):
                this.type = new SWITCHSTATEMENT();
                this.type.parse(node);
                break;
            case ("ThrowStatement"):
                this.type = new THROWSTATEMENT();
                this.type.parse(node);
                break;
            case ("TryStatement"):
                this.type = new TRYSTATEMENT();
                this.type.parse(node);
                break;
            case ("VariableDeclaration"):
                this.type = new VARIABLEDECLARATION();
                this.type.parse(node);
                break;
            case ("WhileStatement"):
                this.type = new WHILESTATEMENT();
                this.type.parse(node);
                break;
            case ("WithStatement"):
                this.type = new WITHSTATEMENT();
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