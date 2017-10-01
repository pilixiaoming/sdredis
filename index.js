const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

const app = express();

//error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({
    error: err.message
  });
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/yuandaxia/api', routes);


app.listen(process.env.PORT || 3003, function(){
  console.log('now listening for request');
});
