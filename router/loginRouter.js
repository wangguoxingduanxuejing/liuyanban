const express = require('express');
const router = express.Router();
module.exports=router;

router.get("/signin",function(req,res){
    res.json({mes:"渲染登陆"})
});
router.post("/signin",function(req,res){
    res.json({mes:"处理请求"})
});
router.get("/signup",function(req,res){
    res.json({mes:"渲染注册"})
});
router.post("/signup",function(req,res){
    res.json({mes:"处理注册请求"})
});