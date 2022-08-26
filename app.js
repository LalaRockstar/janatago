const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const viewRouter = require("./routers/viewRouter");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/", viewRouter);
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 400;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
