const path = require('path');

const getAboutHandler = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'), (err) => {
        if (err) {
            res.status(500).send('Server error loading /about page...');
        }
    });
};

module.exports = { getAboutHandler };
