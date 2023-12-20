const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true
  },
  countryCode: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
},
  {
    timestamps:true
  });

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
