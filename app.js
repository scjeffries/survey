var express = require('express'),
    path = require('path')
    routes = require(path.join(__dirname, 'api/routes'));

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.listen(3000, function () {
  console.log('Express app listening on port 3000!');
});
