const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/solar';
async function connectToDatabase() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Success connect to MongoDB')
    }
    catch (err) {
        console.log('Failed to connect to MongoDB')
        console.error(err);
    }
} 

module.exports = connectToDatabase