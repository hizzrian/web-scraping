const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';
axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const title = $('.titleColumn').text();
        console.log(title);
        // console.log(html);
    })
    .catch(error => {
        console.log(error);
    });