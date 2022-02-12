const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const db = require('./config/db');

const app = express();
const port = 3000;
//connect db to

db.connect();
const route = require('./routes');




//static files
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//logger
app.use(morgan('combined'));

//template engine

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
