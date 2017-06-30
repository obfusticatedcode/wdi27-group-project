const mongoose = require('mongoose');


//define categorySchema
// const categorySchema = new mongoose.Schema({
//   name: { type: String },
//   amount: { type: Number }
// });

const campaignSchema = new mongoose.Schema({
  name: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  description: { type: String },
  expiryDate: { type: Date },
  isAvailable: { type: Boolean },
  type: { type: Boolean }
  // categories: [ categorySchema ]
});




module.exports = mongoose.model('Campaign', campaignSchema);
