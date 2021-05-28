let app = require("express")();
let http = require("http").Server(app);
const mongoose = require("mongoose");

const routes = require("./src/routes/routes");
const config = require("./src/config/config");

var port = 3000;

http.listen(port, function () {
  console.log("listening on port : " + port);
});

app.use(routes);

db = config.database;
mongoose
  .connect(db)
  .then(result => {
    console.log("Connected to database");
  })
  .catch(err => {
    console.log(err);
  });
