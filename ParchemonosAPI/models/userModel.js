const mongoose = require('mongoose'),
      { Schema } = mongoose,
      UserScheme = new Schema ({
          document: String,
          name: String,
          phone: String,
          email: {type: String, unique: true, required: true},
          password: String,
      }),
      userModel = mongoose.model('User', UserScheme)

module.exports = userModel