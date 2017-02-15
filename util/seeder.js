const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.load({ path: '.env' });

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});
console.log('MongoDB connection establish');
User.create({ username: 'admin', email: 'admin@admin.com', password: 'aaaaaa', profile: {name: 'Admin'}, userType: 'ADMIN' });