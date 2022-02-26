const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/create", require("./routes/post"));
app.use("/api/user", require("./routes/portfolio"));
///////////////////////////////////////////
app.use(function (req, res, next) {
  res.json({ error: "Not found" });
});
/////////////////////////////////////////////////
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
