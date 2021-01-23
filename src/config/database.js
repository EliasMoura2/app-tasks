const mongoose = require('mongoose');

mongoose.connection.on('open', () => console.log('DB IS CONNECTED'))
async function connectDB({ host, port, dbname }){
  const URI = `mongodb://${host}:${port}/${dbname}`
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB