const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  skins: {
    type: Number,
    required: true
  },
  vbucks: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  sold: {
    type: Boolean,
    default: false
  },
  browser: {
    type: String,
    enum: ['chrome', 'firefox', 'edge', 'other'],
    default: 'chrome'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Account', accountSchema);
