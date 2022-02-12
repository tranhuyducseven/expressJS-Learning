const Post = require('../models/post');
const { multipleMongooseToObject } = require('../../utils/mongoose')
class SiteController {
    // [GET] /
    index(req, res, next) {
        Post.find({})
            .then(posts => res.render('home', { posts: multipleMongooseToObject(posts) }))
            .catch(next);

    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();