const express = require('express'),
      app = express(),
      cors = require('cors'),
      //capturar variable de ambiente
      port = process.env.port || 3000,
      experiencesRoutes = require('./routes/experiences'),
      bookingRoutes = require('./routes/booking'),
      userRoutes = require('./routes/users')

require('./connection/mongoConnection')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/experiences', experiencesRoutes)
app.use('/booking', bookingRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`server running on ${port}`)
})