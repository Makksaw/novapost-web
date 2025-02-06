const express = require('express');
const router = require('./routes');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(router);

if (require.main === module)
    app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
