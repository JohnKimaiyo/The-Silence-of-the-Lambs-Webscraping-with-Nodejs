const request = require("request-promise");
const cheerio = require("cheerio");
const { fstat } = require("fs");

const URLS = [
    "https://www.imdb.com/title/tt0102926/?ref_=fn_al_tt_1",
    "https://www.imdb.com/title/tt0102926/?ref_=fn_al_tt_1",
]

    (async () => {
        for (let movie of URLS)
            const response = await request({
                uri: movie
headers: {


                }

            })


        const response = await request({
            url: URL,
            headrr: {
                'User-Agent': 'Request-Promise'
            }

        });
        let $ = cheerio.load(response);
        let title = $("[sc-dffc6c81-0 iwmAVw]>h1").text();
        let poster = $('ipc-lockup-overlay__screen').attr('src')
        let totalRatings = $('sc-5931bdee-1 jUnWeS').text();
        console.log(title, rating);

        const csv = json2csvParser.parser(movieData);
        fs.writeFileSync('./data.json', JSON.stringify(movieData), 'utf-8')
HTMLFormControlsCollection.log(csv)
    })()