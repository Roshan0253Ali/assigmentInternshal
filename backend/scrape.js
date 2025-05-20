// File: backend/scrape.js
const axios = require('axios');
const cheerio = require('cheerio');
const Event = require('./models/Event');

const scrapeEvents = async () => {
  const { data } = await axios.get('https://www.timeout.com/sydney/things-to-do');
  const $ = cheerio.load(data);
  const events = [];
const baseUrl = 'https://www.timeout.com';
  $('.card--content').each((i, el) => {
    const title = $(el).find('h3').text().trim();
    const link = $(el).find('a').attr('href'); 
    const description = $(el).find('p').text().trim();
    const imageUrl = $(el).closest('.card').find('img').attr('src');

    if (title && link) {
          if (link.startsWith('/')) {
      link = baseUrl + link;
    }
      events.push({
        title,
        link,
        description: description || 'No description available.',
        imageUrl: imageUrl || 'https://via.placeholder.com/300',
        date: 'Upcoming',
        location: 'Sydney'
      });
    }
  });

  await Event.deleteMany();           // clear old events
  await Event.insertMany(events);     // insert new ones
};

module.exports = scrapeEvents;
