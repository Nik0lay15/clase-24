import express from "express";
import IndexRoute from "../routes/index.js";

const app = express();
const __dirname = process.cwd();

app.set("view engine","ejs");
app.set("views",__dirname+"/views/");
app.use("/css",express.static(__dirname+"/node_modules/bootstrap/dist/css"));

app.use("/",IndexRoute);

export default app;