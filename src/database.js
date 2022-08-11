const mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/notes-db-app';

mongoose.connect(mongoDB,  {useNewUrlParser: true, useUnifiedTopology: true})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))