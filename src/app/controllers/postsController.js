const Post = require("../models/post");
const { mongooseToObject } = require("../../utils/mongoose");
class PostsController {
  index(reg, res, next) {
    res.redirect("/");
  }
  show(req, res, next) {
    Post.findOne({ slug: req.params.slug }).then((post) =>
      res.render("posts/show", { post: mongooseToObject(post) })
    );
  }
  create(req, res) {
    res.render("posts/create");
  }
  edit(req, res, next) {
    Post.findById(req.params.id)
      .then((post) =>
        res.render("posts/edit", { post: mongooseToObject(post) })
      )
      .catch(next);
  }
  store(req, res) {
    const data = req.body;
    const post = new Post(data);
    post
      .save()
      .then(() => res.redirect("/"))
      .catch();
  }
  // [PUT] /posts/:id
  update(req, res, next) {
    Post.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/posts"))
      .catch(next);
  }
  // [DELETE] /posts/:id
  delete(req, res, next) {
    Post.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/posts"))
      .catch(next);
  }
}

module.exports = new PostsController();
