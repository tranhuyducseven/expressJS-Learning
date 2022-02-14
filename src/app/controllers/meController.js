const Post = require("../models/post");
const {multipleMongooseToObject} = require("../../utils/mongoose");

class meController {
  // [GET] /me/stored/posts
  storedPosts(req, res, next) {
    Post.find({})
      .then((posts) =>
        res.render("me/stored-posts", {
          posts: multipleMongooseToObject(posts),
        })
      )
      .catch(next);
  }
}
module.exports = new meController();
