const esprima = require('esprima');
const fs = require('fs');

function init() {
    let files = fs.readdirSync("../input/");
    let programs = [];
    for (let file of files) {
        programs.push(fs.readFileSync("../input/" + file, "utf-8"));
    }
    let count = 0;
    for (let program of programs) {
        console.log("File name: " + files[count] + "\n");
        esprima.tokenize(program);
        //console.log(esprima.parse(program,{loc:true, comment: true}));
        let p = new PROGRAM();
        let comments = p.parse(esprima.parse(program, {loc: true, comment: true, sourceType: "module"}));
        let table = {
            comments: comments,
            memberCalls: {},
            defined: {},
            used: {},
            longChains: [],
            imports: {},
            longMethods: [],
            commentMethods: []
        }
        p.evaluate(table);
        generateReport(table);
        count++;
        console.log("***********************************\n")
    }

}

function generateReport(table) {
    if (table.longMethods.length > 0) {
        console.log("You have some methods with more than 50 lines! Consider shortening them:");
        for (let method of table.longMethods) {
           console.log(method.name + " on line " + method.line + "\n");
        }
    }
    if (table.commentMethods.length > 0) {
        console.log("You have some methods with more than 5 lines of comments! Consider making your code speak for itself:");
        for (let method of table.commentMethods) {
            console.log(method.name + " on line " + method.line + "\n");
        }
    }
    if (table.longChains.length > 0) {
        console.log("You have some long message chains! That's when you chain a bunch of calls in a row. Consider splitting them up:");
        for (let method of table.longChains) {
            console.log("Line: " + method.start.line + ", Character: " + method.start.column + "\n");
        }
    }
    let envy = [];
    for (let item in table.defined) {
        if (table.memberCalls[item]) {
            if (table.memberCalls[item].length > 3) {
                envy.push([item, table.memberCalls[item][0].start.line, table.memberCalls[item][0].start.column]);
            }
        }
    }
    for (let item in table.imports) {
        if (table.memberCalls[item]) {
            if (table.memberCalls[item].length > 3) {
                envy.push([item, table.memberCalls[item][0].start.line, table.memberCalls[item][0].start.column]);
            }
        }
    }
    if (envy.length > 0) {
        console.log("You might have some feature envy. Consider moving some methods to reduce coupling.");
        for (let item of envy) {
            console.log(item[0] + " on Line: " + item[1] + ", Character: " + item[2] + "\n");
        }
    }
    let deadCode = [];
    for (let item in table.defined) {
        if (table.used[item] === 1) {
            deadCode.push([item, table.defined[item].start.line, table.defined[item].start.column]);
        }
    }
    if (deadCode.length > 0) {
        console.log("You might have some dead code. Consider making sure you have no unused variables.");
        for (let item of deadCode) {
            console.log(item[0] + " on Line: " + item[1] + ", Character: " + item[2] + "\n");
        }
    }
}

const PROGRAM = require('../ast/PROGRAM');

init();


