const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, eventId } = req.body;
  await Subscriber.create({ email, eventId });
  res.status(200).send({ message: 'Email saved.' });
});

module.exports = router;