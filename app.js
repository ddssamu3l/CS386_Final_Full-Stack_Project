// main.js
const express = require("express");
const path = require("path");
const app = express();
const connectDB = require("./modules/db.js");
const { host, port } = require("./modules/config.js");
const fRoutes = require("./routes/routes.js");
const hbs = require("express-handlebars");

connectDB(true);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Handlebars view engine
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs.engine({
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main_layout",
    extname: "hbs",
    helpers: {
      formatDate: function (timestamp, locale = "en-US") {
        const date = new Date(parseInt(timestamp));
        if (isNaN(date.getTime())) {
          return "Invalid Date";
        }
        return date.toLocaleString(locale, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
  })
);

fRoutes(app);

app.listen(port, host, function () {
  console.log(`Express started on ${host}:${port}; press Ctrl-C to terminate.`);
});

process.on("SIGINT", function () {
  connectDB(false, function () {
    process.exit(0);
  });
});
