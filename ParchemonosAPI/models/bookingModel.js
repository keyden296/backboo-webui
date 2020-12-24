const mongoose = require('mongoose'),
      { Schema } = mongoose,
      BookingScheme = new Schema({
        //   bookingId: String,
          userId: String,
          experienceId: String,
          bookingDate: Date,
          comment: {type: String, trim: true},
          rate: {
              score: Number,
              rateComment: {type: String, trim: true}
          }
      }),
      bookingModel = mongoose.model('bookings', BookingScheme)

module.exports = bookingModel