const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    err ? console.log(err) : console.log("DataBase Connected");
  }
);
