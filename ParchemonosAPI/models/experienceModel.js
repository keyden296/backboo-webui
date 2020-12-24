const mongoose = require('mongoose')
      const {Schema} = mongoose
       const ExperienceSchema = new Schema({
          image: String,
          title: String,
          place: String,
          description: String,
          price: Number,
          score: Number,
          users: Number
      }),
      //experiences = coleccion en mongo
      ExperienceModel = mongoose.model('experiences', ExperienceSchema)

module.exports = ExperienceModel

