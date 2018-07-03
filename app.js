let express = require('express'),
app = express(),
passport   = require('passport'),
session    = require('express-session'),
bodyParser = require('body-parser'),
exphbs = require('express-handlebars'),
env = require('dotenv').load();

const route = require('./app/routes/api');
app.use('/api',route.route);




let models = require("./app/models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

var authRoute = require('./app/routes/auth.js')(app,passport);
require('./app/config/passport/passport.js')(passport, models.user);


models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});


app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});


app.listen(3000, function(err) {

    if (!err)
        console.log("Site is live at 3000");
    else {
        console.log("server not listening")
        console.log(err)
    }
});
