const poor = require('./db');
module.exports.showIndex=function(req,res){
    res.render('index.html');
    res.end();
}

