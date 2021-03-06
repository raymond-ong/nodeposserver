var cors = require('cors')

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');
  
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/posServerRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('products list RESTful API server started on: ' + port);