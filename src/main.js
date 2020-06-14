const esprima = require('esprima');
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
console.log(esprima.parse(program).body[0].body.body[1].declarations[0].init.object);

