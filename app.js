const express = require('express');
const app = express();

// log requests
app.use((req, res, next) => {
  console.log('GET ' + req.url);
  next();
});

app.use(express.static('public'));

const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log('Server Started');
});
