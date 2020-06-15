export default class PROGRAM{
    parse(node){
        this.sourceType = node.sourceType;
        this.body = [];
        if(this.sourceType == 'script'){
            for(let statementListItem of node.body){
                //
            }
        } else {
            for(let moduleItem of node.body){
                let temp = null;
                if(moduleItem.type = 'ImportDeclaration'){

                } else if(moduleItem.type == 'ExportAllDeclaration' ||
                          moduleItem.type == 'ExportDefaultDeclaration' ||
                          moduleItem.type == 'ExportNamedDeclaration'){

                } else {
                    
                }
            }
        }
    }
}