const express = require('express');
const env = require('./config/environment');
const port = 2000;
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const app = express();
const db = require('./config/mongoose');
const User = require("./models/user");

if(env.name == 'development')
{
    app.use(sassMiddleware({
        src: './assets/scss',
        dest: './assets/css',
        debug:true,
        outputStyle: 'extended',
        prefix: '/css'
    }))
}



app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'));


app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err)
    {
        console.log("Error in running server");
    }
    else{
        console.log("Server Up")
    }
})
