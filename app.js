const express = require('express');
const app = express();
const indexRouter = require("./router/indexRouter");
const loginRouter = require("./router/loginRouter");
const port = 3000;
app.listen(port,function(req,res){
    console.log("服务器已经正式开启了");
});

app.use(indexRouter);
app.use(loginRouter);
// app.use("/",(req,res)=>{
//     res.json("欢迎来到我的世界");
// });