const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const db = require("./config/db");
var methodOverride = require("method-override");

const app = express();
const port = 9000;
//connect db to

db.connect();
const route = require("./routes");

//static files
app.use(express.static(path.join(__dirname, "public")));

//
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//logger
app.use(morgan("combined"));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
//template engine

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
