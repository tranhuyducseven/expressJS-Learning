const Post = require('../models/post');
const { mongooseToObject } = require('../../utils/mongoose')
class PostsController {
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug })
            .then(post => res.render('posts/show', { post: mongooseToObject(post) }))
    }
    create(req, res) {
        res.render('posts/create');
    }
    store(req, res) {
        const data = req.body;
        const post = new Post(data);
        post.save()
        .then(()=>res.redirect('/'))
        .catch()
    }
}

module.exports = new PostsController();
