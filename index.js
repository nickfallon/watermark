const express = require('express');
const app = express();

const middleware = require('./helpers/middleware');

app.use('/', express.static('public'));
app.use(middleware.corsHeaders);

//start server
var port = 8080;
const server = app.listen(port, () => {
    console.log('started on port ' + port);
});



