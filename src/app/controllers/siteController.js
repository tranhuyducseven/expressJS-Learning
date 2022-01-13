const Course = require('../models/course')

class SiteController {
    index(req, res) {
        Course.find({}, function (err, courses) {
            res.json(courses);
        });
    }
    search(req, res) {
        res.send('search.....');
    }
}

module.exports = new SiteController();
