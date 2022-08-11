const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');



// Initialize
const app = express();
require('./database')

// Settings
console.log(exphbs);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir:path.join(app.get('views'), 'partials'),
  extname:'.hbs',
}))
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(session({
  secret: 'mysecretapp',
  resave: true,
  saveUninitialized: true
}))


// Global variables


// Routes
app.use(require('./routes/index'))
app.use(require('./routes/users'))
app.use(require('./routes/notes'))

// Static files
app.use(express.static(path.join(__dirname, 'public')));  
// // <link type="text/css" rel="stylesheet" href="/css/styles.css"></link>


// Server is listenning
app.listen(app.get('port'), ()=>{
  console.log('Server running on port ' + app.get('port'));
})
