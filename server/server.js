import app from "../app/app.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./config/.env",
});

const port = process.env.PORT;

const server = app.listen(port,()=>{
    console.log("Server up",port);
});
server.on("error",(error)=>{
    console.log(new Error(error));
});
server.on("close",(id)=>{
    console.log("Worker died",id);
});