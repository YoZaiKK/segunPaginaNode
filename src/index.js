const express = require('express');

// Initialize
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares


// Global variables


// Routes


// Static files


// Server is listenning
app.listen(app.get('port'), ()=>{
  console.log('Server running on port ' + app.get('port'));
})
