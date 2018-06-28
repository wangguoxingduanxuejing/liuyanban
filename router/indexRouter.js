const express = require('express');
const router = express.Router();
module.exports=router;
router.get('/',function(req,res){
    res.json({"message":"首次访问处理"});
});