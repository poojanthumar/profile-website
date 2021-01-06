const express = require('express');
const port = 2000;


const app = express();



app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err)
    {
        console.log("Error in running Server");
    }
})
