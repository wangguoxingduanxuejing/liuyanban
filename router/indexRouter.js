const express = require('express');
let index = require('../controller/index');
const router = express.Router();

module.exports=router;
router.get("/",index.showIndex);

