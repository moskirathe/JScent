const esprima = require('esprima');
const PROGRAM = require('../ast/PROGRAM');
const program = "function handleRequest(userScore) {\n" +
    "    let companies = [];\n" +
    "    let test = Test.test;\n" +
    "    return Stock.find()\n" +
    "        .then((stocks) => {\n" +
    "            console.log(stocks);\n" +
    "            for (let company of stocks) {\n" +
    "                companies.push(company[\"ticker\"]);\n" +
    "                scores[company[\"ticker\"]] = calcScore(userScore, company);\n" +
    "            }\n" +
    "            return returnStocks(scores, companies);\n" +
    "        })\n" +
    "        .catch((err) => {\n" +
    "            throw err;\n" +
    "        });\n" +
    "}"

esprima.tokenize(program);
console.log(esprima.parse(program));
let p = new PROGRAM();
p.parse(esprima.parse(program));


