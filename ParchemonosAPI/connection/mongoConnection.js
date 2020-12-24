const mongoose = require('mongoose'),
      url = 'mongodb://localhost:27017/parchemonos_db',
      db = mongoose.connection

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true)

// listen {error, open}
db.on('error', () => console.error('Error con la conexión'))
db.once('open', () => console.log('Conexión establecida'))

module.exports = db