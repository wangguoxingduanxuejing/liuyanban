const express = require('express');
const user = require('../controller/user');
// const multipart  = require('connect-multiparty');
// var mul = multipart();
const router = express.Router();
module.exports=router;

router.get("/signin",user.showSignin);
router.post("/signin",function(req,res){
    res.json({mes:"处理请求"});
    console.log(req.body);
    res.end();
});
router.get("/signup",user.showSignup);
router.post("/signup",user.signup);