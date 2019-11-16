const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM registry', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }



    });
});



router.get('/:id', (req,res) =>{
    const { id} = req.params;
    mysqlConnection.query('SELECT * FROM registry WHERE id=?',[id], (err, rows,fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    });
    console.log(id);
});



router.post('/save', (req,res)=>{
 
    const { id,email, distributor, domain } = req.body;
    

    //INSERT INTO registry VALUES (0, ? , ?, ?)


    mysqlConnection.query('INSERT INTO registry (id, email, distributor, domain) SELECT ?, ? , ?, ? FROM DUAL WHERE NOT EXISTS (SELECT domain FROM registry WHERE domain =?)'
    , 
    [id,email, distributor, domain, domain],(err, rows,fields)=>{
        if(!err){
            
            res.json(rows);
        } else{
            console.log(err);
        }

    });

});

router.put('/update/:id', (req,res)=>{
    const {id} = req.params;
    
   const {distributor} = req.body;
  
    mysqlConnection.query('UPDATE registry set distributor=? WHERE id=?', [ distributor,id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
            
            
        } else{
            console.log(err);
        }

    });

});


module.exports = router;