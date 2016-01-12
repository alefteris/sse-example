'use strict';

const sse = require('connect-sse')();
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/events', sse, function (req, res) {
  let i = 0;
  setInterval(() => { i += 1; res.json(`Event #${i}`) }, 1000)
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
