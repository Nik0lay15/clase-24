import app from "../app/app.js";

const port = process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("Server up",port);
});
server.on("error",(error)=>{
    console.log(new Error(error));
});
server.on("close",(id)=>{
    console.log("Worker died",id);
});