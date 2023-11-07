const express = require('express');
const app = express();
require('dotenv').config();
const http = require('http');
const setupwss = require('./websocket');

app.use(express.json());
const server = http.createServer(app);

setupwss(server);

const port = process.env.PORT || 3000;

const systemRoutes = require('./routes/route');

app.use(`/register`, systemRoutes);
app.use(`/login`, systemRoutes);
app.use(`/texts`, systemRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});