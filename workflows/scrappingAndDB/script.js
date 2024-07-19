const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops';

async function scrape() {
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);

  const data = [];
  $('h4 > a.title').each((_, element) => {
    data.push({
      title: $(element).attr('title'),
      link: $(element).attr('href')
    });
  });

  return data;
}

scrape().then(data => console.log(JSON.stringify(data)));