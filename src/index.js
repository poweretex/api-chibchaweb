const express= require('express');

const app= express();

// setings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/registros'));
//Start server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});