require('dotenv').config();

const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");
const app = express();

const connectDB = require('./server/config/db');
const session  = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const PORT = 5000 || process.env.PORT;

app.use(session({
    secret: 'my secret',
    resave:  false,
    saveUninitialized : true,
    store: MongoStore.create({
        mongoUrl : process.env.MONGODB_URL
    })
}));


app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));

//connect to DB
connectDB();

// static files
app.use(express.static('pubic'));

app.use(expressLayouts);

app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


//Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

app.get('*', (req,res)=>{
    res.status(404).render('404');
})


app.listen(PORT, ()=>{
    console.log(`server is runnig on port ${PORT}` );
} );