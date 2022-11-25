const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// This will be call by APPLE TO VERIFY THE APP-SITE-ASSOCIATION 
// Make the 'apple-app-site-association' accessable to apple to verify the association
app.get('/.well-known/apple-app-site-association', function (request, response) {
  response.sendFile(__dirname + '/apple-app-site-association');
});
app.get('/.well-known/assetlinks.json', function (request, response) {
  response.sendFile(__dirname + '/assetlinks.json');
});

// HOME PAGE
app.get('/home', function (request, response) {
  response.sendFile(__dirname + '/home.html');
});
app.get('/actualizar-datos-home', function (request, response) {
  response.sendFile(__dirname + '/home.html');
});

// ABOUT PAGE
app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/about.html');
});// ABOUT PAGE
app.get('/test_ok', function (request, response) {
  response.sendFile(__dirname + '/test_ok.html');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
