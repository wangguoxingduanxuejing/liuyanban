const pool = require('./db');
// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// 跳转到注册页面
module.exports.showSignup=function(req,res){
    res.render("signup.html");
    res.end();
}
// 注册
module.exports.signup=function(req,res){
    let sql = "insert into `users` set ?";
    let createdAt = new Date();
    let user = req.body;
    user.createdAt=createdAt;

    pool.getConnection(function(err, connection) {
        // Use the connection
        connection.query(sql,user, function (error, results, fields) {
           
          connection.release();
          if (error) throw error;
          console.log(results);
          res.end();
        
        });
      });
    // res.json({"success":true});
   
   
}
// 跳转到登陆页面
module.exports.showSignin=function(req,res){
    res.render("signin.html");
    res.end();
}
// 登陆
module.exports.signin=function(req,res){
    res.send("你好");
    res.end();
}