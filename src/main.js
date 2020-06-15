const esprima = require('esprima');

const program = "const express = require('express');\n" +
    "const connectDB = require('./config/db');\n" +
    "const axios = require('axios');\n" +
    "const cheerio = require('cheerio');\n" +
    "const fs = require(\"fs\");\n" +
    "const cors = require(\"cors\");\n" +
    "const stocks = require('./routes/api/stocks');\n" +
    "const user = require('./routes/api/user');\n" +
    "const bodyParser = require('body-parser');\n" +
    "const server = express();\n" +
    "const Stock = require('./models/Stock');\n" +
    "connectDB();\n" +
    "\n" +
    "server.use(cors({ origin: true, credentials: true }));\n" +
    "server.use('/api/stocks', stocks);\n" +
    "server.use('/api/user', user);\n" +
    "server.use(bodyParser.json());\n" +
    "\n" +
    "const RETURN_NUMBER = 20; //number of stocks to return to client\n" +
    "const SCRAPE = false; //scrape on startup? TODO: have this true on first boot of day, then false\n" +
    "let companies = parseAll();\n" +
    "if (SCRAPE) {\n" +
    "    scrapeAll(companies)\n" +
    "        .then(() => console.log(\"scrape finished\"));\n" +
    "}\n" +
    "\n" +
    "server.post('/', (req,res) => {\n" +
    "    handleRequest(req.body)\n" +
    "        .then((stocks) => {\n" +
    "            res.json(stocks);\n" +
    "        }).catch((err) => {\n" +
    "            console.error(err.message);\n" +
    "        res.status(400).json({ error: \"unable to get score\"})\n" +
    "    });\n" +
    "});\n" +
    "\n" +
    "const port = process.env.PORT || 8000;\n" +
    "\n" +
    "server.listen(port, () => console.log(`Server running on port ${port}`));\n" +
    "\n" +
    "//size, risk, dividends, efficiency, profitability, growth, value\n" +
    "\n" +
    "function handleRequest(userScore) {\n" +
    "    let companies = [];\n" +
    "    let scores = {};\n" +
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
    "}\n" +
    "\n" +
    "function calcScore(userScore, stockScore) {\n" +
    "    let score = 0;\n" +
    "    for (let category in userScore) {\n" +
    "        score += userScore[category] * stockScore[category];\n" +
    "    }\n" +
    "    return score;\n" +
    "}\n" +
    "\n" +
    "function marketCap(mCap) {\n" +
    "    if (mCap > 10000000000) {\n" +
    "        return 1;\n" +
    "    } else if (mCap > 2000000000) {\n" +
    "        return 0;\n" +
    "    } else {\n" +
    "        return -1;\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "function  peRatio(pe) {\n" +
    "    return Math.max(Math.min(pe/40, 2), -1); //average pe is close to 20, giving an average company a score of 0.5\n" +
    "}\n" +
    "\n" +
    "function profitMargin(margin) {\n" +
    "    return Math.max(Math.min(margin/0.3, 2), -1); //a good PM is 0.3, giving a good company a score of 1\n" +
    "}\n" +
    "\n" +
    "function operatingMargin(margin) {\n" +
    "    return Math.max(Math.min(margin/0.4, 2), -1); //a good OM is 0.4, giving a good company a score of 1\n" +
    "}\n" +
    "\n" +
    "function returnOnAssets(roa) {\n" +
    "    return Math.max(Math.min(roa/0.05, 2), -1); //a good ROA is 0.05, giving a good company a score of 1\n" +
    "}\n" +
    "\n" +
    "function returnOnEquity(roe) {\n" +
    "    return Math.max(Math.min(roe/0.2, 2), -1); //a good ROE is 0.05, giving a good company a score of 1\n" +
    "}\n" +
    "\n" +
    "function dividendYield(div) {\n" +
    "    return Math.max(Math.min(div/0.05, 2), -1); //a good ROE is 0.05, giving a good company a score of 1\n" +
    "}\n" +
    "\n" +
    "function pegRatio(peg) { //lower is perceived as better here, so the inverse is given as a score\n" +
    "    if(peg === 0) {\n" +
    "        return 0;\n" +
    "    } else {\n" +
    "        return Math.max(Math.min(1 / peg, 2), -1);\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "//sorts stocks by score and returns top RETURN_NUMBER stocks\n" +
    "function returnStocks(scores, stocks) {\n" +
    "    let result = {};\n" +
    "    stocks.sort((a,b) => {\n" +
    "        return scores[b] - scores[a];\n" +
    "    });\n" +
    "    for (let i = 0; i < RETURN_NUMBER; i++) {\n" +
    "        result[stocks[i]] = companies[stocks[i]];\n" +
    "    }\n" +
    "    console.log(result);\n" +
    "    return result;\n" +
    "}\n" +
    "\n" +
    "//returns result array of stocks scores taking parsed stock data as input\n" +
    "function calcIndexes (data) {\n" +
    "    let result = {};\n" +
    "    result[\"size\"] = marketCap(data[\"Market Cap (intraday)\"]);\n" +
    "    result[\"risk\"] = data[\"Beta (5Y Monthly)\"];\n" +
    "    result[\"dividends\"] = dividendYield(data[\"Forward Annual Dividend Yield\"]);\n" +
    "    result[\"efficiency\"] = returnOnAssets(data[\"Return on Assets (ttm)\"]);\n" +
    "    result[\"profitability\"] = (profitMargin(data[\"Profit Margin\"]) +\n" +
    "                               operatingMargin(data[\"Operating Margin (ttm)\"]) +\n" +
    "                               returnOnEquity(data[\"Return on Equity (ttm)\"])) / 3;\n" +
    "    result[\"growth\"] = peRatio(data[\"Forward P/E\"]);\n" +
    "    result[\"value\"] = pegRatio(data[\"PEG Ratio (5 yr expected)\"]);\n" +
    "    return result;\n" +
    "}\n" +
    "\n" +
    "//scrapes yahoo finance site for the given ticker\n" +
    "function scrape(ticker) {\n" +
    "    return axios(\"https://ca.finance.yahoo.com/quote/\" + ticker + \"/key-statistics\")\n" +
    "        .then((response) => {\n" +
    "            console.log(ticker);\n" +
    "            let $ = cheerio.load(response.data);\n" +
    "            let table = $('tbody'); //table is an array of all tables on the page\n" +
    "            let vals = {};\n" +
    "            table.each(function() { //for each table, add each item in the table to vals object as key/value pair\n" +
    "                for (let i = 0; i < this.childNodes.length; i++) {\n" +
    "                    let val = convertToNum($(this.childNodes[i].childNodes[1]).text());\n" +
    "                    vals[removeFootnotes($(this.childNodes[i].childNodes[0]).text().trim())] = val;\n" +
    "                }\n" +
    "            });\n" +
    "            return vals;\n" +
    "        })\n" +
    "        .catch(function (err) {\n" +
    "            console.log(\"error parsing HTML\");\n" +
    "            throw err;\n" +
    "        });\n" +
    "}\n" +
    "\n" +
    "//iterates through companies and attempts to scrape each one and save it to the database\n" +
    "async function scrapeAll(companies) {\n" +
    "    for (let company in companies) {\n" +
    "            await scrape(company)\n" +
    "                .then((response) => {\n" +
    "                    let temp = calcIndexes(response);\n" +
    "                    temp[\"ticker\"] = company;\n" +
    "                    Stock.findOneAndUpdate({ticker: company}, temp, {upsert: true, new: true})\n" +
    "                        .then((result) => {\n" +
    "                            console.log(company + \" posted\");\n" +
    "                        })\n" +
    "                        .catch((err) => {\n" +
    "                            console.log(\"couldn't post \" + company);\n" +
    "                            console.error(err.message);\n" +
    "                        });\n" +
    "                })\n" +
    "                .catch((err) => {\n" +
    "                    console.error(err.message);\n" +
    "                });\n" +
    "            await wait(1);\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "async function wait(ms) { //making setTimeout return a promise so it can be used asynchronously\n" +
    "    return new Promise(resolve => {\n" +
    "        setTimeout(resolve, ms);\n" +
    "    })\n" +
    "}\n" +
    "\n" +
    "// Takes string as input and returns same string with footnote character and whitespace removed\n" +
    "function removeFootnotes(data) {\n" +
    "    let nums = [\"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\"];\n" +
    "    if (nums.includes(data.slice(-1))) {\n" +
    "        return data.slice(0,-2);\n" +
    "    } else {\n" +
    "        return data;\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "// Takes various string inputs and returns same converted to Number to be stored\n" +
    "function convertToNum(text) {\n" +
    "// testing\n" +
    "// 1\n" +
    "// 2\n" +
    "// 3\n" +
    "// too many\n" +
    "// comments\n" +
    "    text = text.replace(/,/g, \"\");\n" +
    "    let last = text[text.length - 1];\n" +
    "    switch(last) {\n" +
    "        case \"T\":\n" +
    "            text = Number(text.slice(0,-1)) * 1000000000000;\n" +
    "            break;\n" +
    "        case \"B\":\n" +
    "            text = Number(text.slice(0,-1)) * 1000000000;\n" +
    "            break;\n" +
    "        case \"M\":\n" +
    "            text = Number(text.slice(0,-1)) * 1000000;\n" +
    "            break;\n" +
    "        case \"k\":\n" +
    "            text = Number(text.slice(0,-1)) * 1000;\n" +
    "            break;\n" +
    "        case \"%\":\n" +
    "            text = Number(text.slice(0,-1)) / 100.0;\n" +
    "            break;\n" +
    "        case \"A\":\n" +
    "            text = 0;\n" +
    "            break;\n" +
    "        default:\n" +
    "            text = Number(text);\n" +
    "    }\n" +
    "    return text;\n" +
    "}\n" +
    "\n" +
    "// Parses .csv file containing stock tickers and companies and returns JS object keyed by ticker\n" +
    "function parseAll() {\n" +
    "    let result = {};\n" +
    "    let tickers = fs.readFileSync('./data/russell3000.csv')\n" +
    "      .toString()\n" +
    "       .split('\\r\\n');\n" +
    "    for (let stock of tickers) {\n" +
    "       stock = stock.split(\",\");\n" +
    "       result[stock[0].trim()] = stock[1];\n" +
    "    }\n" +
    "    let a = b.test.test\n" +
    "    let a = b.test.test.test\n" +
    "    let a = b.test.test.test.test\n" +
    "    let a = b.test.test.test.test.test\n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    \n" +
    "    let unused\n" +
    "    return result;\n" +
    "}"

function init() {
    esprima.tokenize(program);
//console.log(esprima.parse(program,{loc:true, comment: true}));
    let p = new PROGRAM();
    let comments = p.parse(esprima.parse(program, {loc: true, comment: true}));
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
    console.log(table);
    generateReport(table);
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


