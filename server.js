const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/class.routes")(app);
require("./routes/gender.routes")(app);
require("./routes/grade.routes")(app);
require("./routes/group.routes")(app);
require("./routes/month.routes")(app);
require("./routes/parent.routes")(app);
require("./routes/section.routes")(app);
require("./routes/session.routes")(app);
require("./routes/student.routes")(app);
require("./routes/subject.routes")(app);
require("./routes/term.routes")(app);
require("./routes/tutorial.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});