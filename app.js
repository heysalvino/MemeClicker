const express = require('express');
const app = express();
const port =3000;
var path = require('path');
app.use(express.static('views'));

app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));