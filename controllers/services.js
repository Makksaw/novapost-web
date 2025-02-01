const path = require('path');

const getServicesHandler = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/services.html'), (err) => {
        if (err) {
            res.status(500).send('Server error loading /services page...');
        }
    });
};

module.exports = { getServicesHandler };
