const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db/MongoDB");

/* Routers */
const answerRouter = require("./routes/answer");

const app = express();

/* Connect database */
db.connect();

app.use(bodyParser.json());
app.use("/api/answer", answerRouter);

// rendering static assets
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
