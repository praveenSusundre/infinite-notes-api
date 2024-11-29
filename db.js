const mongoose = require('mongoose');

const mongoURI  = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000'

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
      }
}

module.exports = connectToMongo;