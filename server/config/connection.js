const mongoose = require('mongoose');

// creates connection to mongoose
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shoplocal-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
