const newsRouter = require("./news.router");
const postsRouter = require("./posts.router");
const siteRouter = require("./site.router");
const meRouter = require("./me.router");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/posts", postsRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
}

module.exports = route;
