const express = require('express');
const connectDB = require('./config/db');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require("fs");
const cors = require("cors");
const stocks = require('./routes/api/stocks');
const user = require('./routes/api/user');
const bodyParser = require('body-parser');
const server = express();
const Stock = require('./models/Stock');
connectDB();

server.use(cors({ origin: true, credentials: true }));
server.use('/api/stocks', stocks);
server.use('/api/user', user);
server.use(bodyParser.json());

const RETURN_NUMBER = 20; //number of stocks to return to client
const SCRAPE = false; //scrape on startup? TODO: have this true on first boot of day, then false
let companies = parseAll();
if (SCRAPE) {
    scrapeAll(companies)
        .then(() => console.log("scrape finished"));
}

server.post('/', (req,res) => {
    handleRequest(req.body)
        .then((stocks) => {
            res.json(stocks);
        }).catch((err) => {
        console.error(err.message);
        res.status(400).json({ error: "unable to get score"})
    });
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Server running on port ${port}`));

//size, risk, dividends, efficiency, profitability, growth, value

function handleRequest(userScore) {
    let companies = [];
    let scores = {};
    return Stock.find()
        .then((stocks) => {
            console.log(stocks);
            for (let company of stocks) {
                companies.push(company["ticker"]);
                scores[company["ticker"]] = calcScore(userScore, company);
            }
            return returnStocks(scores, companies);
        })
        .catch((err) => {
            throw err;
        });
}

function calcScore(userScore, stockScore) {
    let score = 0;
    for (let category in userScore) {
        score += userScore[category] * stockScore[category];
    }
    return score;
}

function marketCap(mCap) {
    if (mCap > 10000000000) {
        return 1;
    } else if (mCap > 2000000000) {
        return 0;
    } else {
        return -1;
    }
}

function  peRatio(pe) {
    return Math.max(Math.min(pe/40, 2), -1); //average pe is close to 20, giving an average company a score of 0.5
}

function profitMargin(margin) {
    return Math.max(Math.min(margin/0.3, 2), -1); //a good PM is 0.3, giving a good company a score of 1
}

function operatingMargin(margin) {
    return Math.max(Math.min(margin/0.4, 2), -1); //a good OM is 0.4, giving a good company a score of 1
}

function returnOnAssets(roa) {
    return Math.max(Math.min(roa/0.05, 2), -1); //a good ROA is 0.05, giving a good company a score of 1
}

function returnOnEquity(roe) {
    return Math.max(Math.min(roe/0.2, 2), -1); //a good ROE is 0.05, giving a good company a score of 1
}

function dividendYield(div) {
    return Math.max(Math.min(div/0.05, 2), -1); //a good ROE is 0.05, giving a good company a score of 1
}

function pegRatio(peg) { //lower is perceived as better here, so the inverse is given as a score
    if(peg === 0) {
        return 0;
    } else {
        return Math.max(Math.min(1 / peg, 2), -1);
    }
}

//sorts stocks by score and returns top RETURN_NUMBER stocks
function returnStocks(scores, stocks) {
    let result = {};
    stocks.sort((a,b) => {
        return scores[b] - scores[a];
    });
    for (let i = 0; i < RETURN_NUMBER; i++) {
        result[stocks[i]] = companies[stocks[i]];
    }
    console.log(result);
    return result;
}

//returns result array of stocks scores taking parsed stock data as input
function calcIndexes (data) {
    let result = {};
    result["size"] = marketCap(data["Market Cap (intraday)"]);
    result["risk"] = data["Beta (5Y Monthly)"];
    result["dividends"] = dividendYield(data["Forward Annual Dividend Yield"]);
    result["efficiency"] = returnOnAssets(data["Return on Assets (ttm)"]);
    result["profitability"] = (profitMargin(data["Profit Margin"]) +
        operatingMargin(data["Operating Margin (ttm)"]) +
        returnOnEquity(data["Return on Equity (ttm)"])) / 3;
    result["growth"] = peRatio(data["Forward P/E"]);
    result["value"] = pegRatio(data["PEG Ratio (5 yr expected)"]);
    return result;
}

//scrapes yahoo finance site for the given ticker
function scrape(ticker) {
    return axios("https://ca.finance.yahoo.com/quote/" + ticker + "/key-statistics")
        .then((response) => {
            console.log(ticker);
            let $ = cheerio.load(response.data);
            let table = $('tbody'); //table is an array of all tables on the page
            let vals = {};
            table.each(function() { //for each table, add each item in the table to vals object as key/value pair
                for (let i = 0; i < this.childNodes.length; i++) {
                    let val = convertToNum($(this.childNodes[i].childNodes[1]).text());
                    vals[removeFootnotes($(this.childNodes[i].childNodes[0]).text().trim())] = val;
                }
            });
            return vals;
        })
        .catch(function (err) {
            console.log("error parsing HTML");
            throw err;
        });
}

//iterates through companies and attempts to scrape each one and save it to the database
async function scrapeAll(companies) {
    for (let company in companies) {
        await scrape(company)
            .then((response) => {
                let temp = calcIndexes(response);
                temp["ticker"] = company;
                Stock.findOneAndUpdate({ticker: company}, temp, {upsert: true, new: true})
                    .then((result) => {
                        console.log(company + " posted");
                    })
                    .catch((err) => {
                        console.log("couldn't post " + company);
                        console.error(err.message);
                    });
            })
            .catch((err) => {
                console.error(err.message);
            });
        await wait(1);
    }
}

async function wait(ms) { //making setTimeout return a promise so it can be used asynchronously
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

// Takes string as input and returns same string with footnote character and whitespace removed
function removeFootnotes(data) {
    let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (nums.includes(data.slice(-1))) {
        return data.slice(0,-2);
    } else {
        return data;
    }
}

// Takes various string inputs and returns same converted to Number to be stored
function convertToNum(text) {
    text = text.replace(/,/g, "");
    let last = text[text.length - 1];
    switch(last) {
        case "T":
            text = Number(text.slice(0,-1)) * 1000000000000;
            break;
        case "B":
            text = Number(text.slice(0,-1)) * 1000000000;
            break;
        case "M":
            text = Number(text.slice(0,-1)) * 1000000;
            break;
        case "k":
            text = Number(text.slice(0,-1)) * 1000;
            break;
        case "%":
            text = Number(text.slice(0,-1)) / 100.0;
            break;
        case "A":
            text = 0;
            break;
        default:
            text = Number(text);
    }
    return text;
}

// Parses .csv file containing stock tickers and companies and returns JS object keyed by ticker
function parseAll() {
    let result = {};
    let tickers = fs.readFileSync('./data/russell3000.csv')
        .toString()
        .split('\r\n');
    for (let stock of tickers) {
        stock = stock.split(",");
        result[stock[0].trim()] = stock[1];
    }
    return result;
}