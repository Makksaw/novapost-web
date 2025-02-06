const express = require('express');
const router = require('./routes');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}`));
