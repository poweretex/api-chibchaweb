const mysql= require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b70fc00b4b6126',
    password: '4974d8a8',
    database: 'heroku_872189bef0bef76'
});
mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports=mysqlConnection;