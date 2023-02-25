const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./helpers/dbConnect");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/user", require("./routes/userRoutes"));
app.use("/post", require("./routes/postRoutes"));
app.use("/booking", require("./routes/bookingRoutes"));
app.use("/contactus", require("./routes/contactUsRoutes"));
app.use("/subscribe", require("./routes/subscribeRoutes"));

app.listen(process.env.PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is running on ${process.env.PORT} `)
);
