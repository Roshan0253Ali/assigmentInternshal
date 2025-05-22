
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const scrapeEvents = require('./scrape');
const dotenv =require('dotenv')
const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config({});
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/events', require('./routes/event'));
app.use('/api/subscribe', require('./routes/subscribe'));
const PORT = process.env.PORT || 3000;
app.get('/scrape', async (req, res) => {
  try {
    await scrapeEvents();
    res.send({ message: 'Events scraped and saved.' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));