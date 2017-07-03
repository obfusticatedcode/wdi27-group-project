const mongoose = require('mongoose');


// define categorySchema
const categorySchema = new mongoose.Schema({
  name: { type: String },
  amount: { type: Number }
});

const campaignSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  location: { lat: Number, lng: Number },
  campaignType: { type: String },
  people: { type: Number },
  description: { type: String },
  date: { type: Date },
  isAvailable: { type: Boolean },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  category: { type: String }
}, {
  timestamps: true
});



module.exports = mongoose.model('Campaign', campaignSchema);
