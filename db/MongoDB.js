const mongoose = require("mongoose");
const db_secret = require("../config/keys").MONGO_URI;

/* Models */
const Answer = require("./models/Answer");

class MongoDB {
  connect = () => {
    mongoose
      .connect(db_secret, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log("MongoDB connected...");
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  postAnswer = answer => {
    console.log("answer");
    console.log(answer);
    const newAnswer = new Answer(answer);
    newAnswer
      .save()
      .then(() => true)
      .catch(error => {
        console.log(error);
        return false;
      });
  };
}

module.exports = new MongoDB();
