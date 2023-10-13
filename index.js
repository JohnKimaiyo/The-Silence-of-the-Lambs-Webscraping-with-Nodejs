const request = require("request-promise");
const cheerio = require("cheerio");

const URL = "https://www.imdb.com/title/tt0102926/?ref_=fn_al_tt_1"

    (async () => {

        const response = await request(URL);
        let $ = cheerio.load(response);
let title= $("[sc-dffc6c81-0 iwmAVw]>h1").text();
let rating=$(("span [itemprop="sc-5931bdee-1 jUnWeS"]").text();
console.log(title);


    })()