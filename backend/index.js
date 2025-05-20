
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const scrapeEvents = require('./scrape');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/sydney_events', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/events', require('./routes/event'));
app.use('/api/subscribe', require('./routes/subscribe'));

app.get('/scrape', async (req, res) => {
  try {
    await scrapeEvents();
    res.send({ message: 'Events scraped and saved.' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));