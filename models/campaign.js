const mongoose = require('mongoose');


//define categorySchema
const categorySchema = new mongoose.Schema({
  name: { type: String },
  amount: { type: Number }
});

const campaignSchema = new mongoose.Schema({
  name: { type: String },
  location: { type: Object },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  description: { type: String },
  expiryDate: { type: Date },
  isAvailable: { type: Boolean },
  type: { type: Boolean },
  categories: [ categorySchema ]
}, {
  timestamps: true
});

campaignSchema
  .virtual('campaignType')
  .get(function campaignType() {
    return this.type ? 'Help offered' : 'Help needed';
  });



module.exports = mongoose.model('Campaign', campaignSchema);
