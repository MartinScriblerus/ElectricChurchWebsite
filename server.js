const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/src', express.static(__dirname + '/src'));
// app.use(express.static('src'));
// app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
 // res.sendFile(path.join(__dirname, '/public'));
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});