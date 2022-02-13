const newsRouter = require('./news.router');
const postsRouter = require('./posts.router');
const siteRouter = require('./site.router');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/posts', postsRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;
