const mongoose = require('mongoose');
async function connect () {
    try{
        await mongoose.connect('mongodb://localhost/blog_dev');

        console.log('Successfully connect to mongodb://localhost')
    }
    catch (error) {
        console.log('failed to connect to mongodb://localhost', error)
    }
}

module.exports = {
    connect,
}