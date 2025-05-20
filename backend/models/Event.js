const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String,
  description: String,
  imageUrl: String,
  link: String,
});
module.exports = mongoose.model('Event', EventSchema);