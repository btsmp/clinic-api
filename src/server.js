const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST);
console.log('Server is running!');