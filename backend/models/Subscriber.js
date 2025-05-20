const mongoose = require('mongoose');
const SubscriberSchema = new mongoose.Schema({
  email: String,
  eventId: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model('Subscriber', SubscriberSchema);