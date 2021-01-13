const express = require('express');
const env = require('./config/environment');
const logger = require("morgan");

const port = 2000;
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const app = express();
const db = require('./config/mongoose');
const User = require("./models/user");
require("./config/view-helper")(app);
if(env.name == 'development')
{
    app.use(sassMiddleware({
        src: path.join(__dirname, env.asset_path, 'scss'),
        dest: path.join(__dirname, env.asset_path, 'css'),
        debug:true,
        outputStyle: 'extended',
        prefix: '/css'
    }))
}


console.log(env.name);


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.static(env.asset_path));

app.use(logger(env.morgan.mode, env.morgan.options));


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
