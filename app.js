const express = require('express');
const app = express();
// const bodyparser = require("body-parser");
const multipart  = require('connect-multiparty');
var mul = multipart();
const indexRouter = require("./router/indexRouter");
const loginRouter = require("./router/loginRouter");

const port = 3000;
app.listen(port,function(req,res){
    console.log("服务器已经正式开启了");
});


app.engine('html',require('express-art-template'));
app.use('/public',express.static("./public"));
app.use('/node_modules',express.static('./node_modules'));
// app.use(bodyparser.urlencoded({ extended: false }));
// app.use(bodyparser.json());
app.use(mul);
app.use(indexRouter);
app.use(loginRouter);




// app.use("/",(req,res)=>{
//     res.render();
//     res.json("欢迎来到我的世界");
// });