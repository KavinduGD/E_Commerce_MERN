const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use("/api/user", userRoute);

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
