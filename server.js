const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

const connection = {
  secret: "secret key",
  cookie: {},
  resave: false,
  saveUnitialized: true,
  store: new sequelizeStore({
    db: sequelize,
  }),
};

app.use(session(connection));

const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("views engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.listen(PORT, () => {
  console.log("running on port 3001");
});
