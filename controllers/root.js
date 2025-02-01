const path = require('path');

const getRootHandler = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'), (err) => {
        if (err) {
            res.status(500).send('Server error loading root page...');
        }
    });
};

module.exports = { getRootHandler };
