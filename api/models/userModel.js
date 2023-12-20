const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  }
});
 
const User = mongoose.model('User', userSchema);

module.exports = User;
