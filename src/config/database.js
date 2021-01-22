const mongoose = require('mongoose');

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then((db) => console.log('DB is Connected'))
//     .catch((err) => console.error(err))
mongoose.connection.on('open', () => console.log('DB IS CONNECTED'))
async function connectDB({ host, port, dbname }){
  const URI = `mongodb://${host}:${port}/${dbname}`
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connectDB