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
    console.log(req.body)
    const { email, distributor, domain } = req.body;
    mysqlConnection.query('INSERT INTO registry VALUES (0, ? , ?, ?)', [email, distributor, domain],(err, rows,fields)=>{
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