import LABELLEDSTATEMENT from "./LABELLEDSTATEMENT";
import SWITCHSTATEMENT from "./SWITCHSTATEMENT";
import THROWSTATEMENT from "./THROWSTATEMENT";
import WHILESTATEMENT from "./WHILESTATEMENT";
import WITHSTATEMENT from "./WITHSTATEMENT";
import IMPORTDECLARATION from "./IMPORTDECLARATION";

module.exports = class PROGRAM{
    parse(node){
        this.sourceType = node.sourceType;
        this.body = [];
        if(this.sourceType == 'script'){
            for(let statementListItem of node.body){
                // StatementListItem = Declaration | Statement;
                // Declaration = ClassDeclaration | FunctionDeclaration |  VariableDeclaration;
                /* type Statement = BlockStatement | BreakStatement | ContinueStatement |
                                    DebuggerStatement | DoWhileStatement | EmptyStatement |
                                    ExpressionStatement | ForStatement | ForInStatement |
                                    ForOfStatement | FunctionDeclaration | IfStatement |
                                    LabeledStatement | ReturnStatement | SwitchStatement |
                                    ThrowStatement | TryStatement | VariableDeclaration |
                                    WhileStatement | WithStatement; */
                let temp = null;
                switch(statementListItem.type){
                    case 'ClassDeclaration':{
                        temp = new CLASSDECLARATION();
                        break;
                    }
                    case 'FunctionDeclaration':{
                        temp = new FUNCTIONDECLARATION();
                        break;
                    }
                    case 'VariableDeclaration':{
                        temp = new VARIABLEDECLARATION();
                        break;
                    }
                    case 'BlockStatement':{
                        temp = new BLOCKSTATEMENT();
                        break;
                    }
                    case 'BreakStatement':{
                        temp = new BREAKSTATEMENT();
                        break;
                    }
                    case 'ContinueStatement':{
                        temp = new CONTINUESTATEMENT();
                        break;
                    }
                    case 'DebuggerStatement':{
                        temp = new DEBUGGERSTATEMENT();
                        break;
                    }
                    case 'DoWhileStatement':{
                        temp = new DOWHILESTATEMENT();
                        break;
                    }
                    case 'EmptyStatement':{
                        temp = new EMPTYSTATEMENT();
                        break;
                    }
                    case 'ExpressionStatement':{
                        temp = new EXPRESSIONSTATEMENT();
                        break;
                    }
                    case 'ForStatement':{
                        temp = new FORSTATEMENT();
                        break;
                    }
                    case 'ForInStatement':{
                        temp = new FORINSTATEMENT();
                        break;
                    }
                    case 'ForOfStatement':{
                        temp = new FOROFSTATEMENT();
                        break;
                    }
                    case 'FunctionDeclaration':{
                        temp = new FUNCTIONDECLARATION();
                        break;
                    }
                    case 'IfStatement':{
                        temp = new IFSTATEMENT();
                        break;
                    }
                    case 'LabeledStatement':{
                        temp = new LABELLEDSTATEMENT();
                        break;
                    }
                    case 'ReturnStatement':{
                        temp = new RETURNSTATEMENT();
                        break;
                    }
                    case 'SwitchStatement':{
                        temp = new SWITCHSTATEMENT();
                        break;
                    }
                    case 'ThrowStatement':{
                        temp = new THROWSTATEMENT();
                        break;
                    }
                    case 'TryStatement':{
                        temp = new TRYSTATEMENT();
                        break;
                    }
                    case 'VariableDeclaration':{
                        temp = new VARIABLEDECLARATION();
                        break;
                    }
                    case 'WhileStatement':{
                        temp = new WHILESTATEMENT();
                        break;
                    }
                    case 'WithStatement':{
                        temp = new WITHSTATEMENT();
                        break;
                    }
                }
                this.body.push(temp);
                temp.parse(statementListItem);
            }
        } else {
            for(let moduleItem of node.body){
                let temp = null;

                switch(moduleItem.type){
                    case 'ImportDeclaration':{
                        temp = new IMPORTDECLARATION();
                        break;
                    }
                    case 'ExportAllDeclaration':{
                        temp = new EXPORTALLDECLARATION();
                        break;
                    }
                    case 'ExportDefaultDeclaration':{
                        temp = new EXPORTDEFAULTDECLARATION();
                        break;
                    }
                    case 'ExportNamedDeclaration':{
                        temp = new EXPORTNAMEDDECLARATION();
                        break;
                    }
                }

                this.body.push(temp);
                temp.parse(moduleItem);
            }
        }
    }
}