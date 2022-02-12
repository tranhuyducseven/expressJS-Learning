const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Post = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        
    }
    
);



module.exports = mongoose.model('Post', Post);