
class NewsController {

    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('New detaidfagdgfgls');
    }

}

module.exports = new NewsController;