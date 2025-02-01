const path = require('path');

const getTrackHandler = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/track.html'), (err) => {
        if (err) {
            res.status(500).send('Server error loading /track page...');
        }
    });
};

module.exports = { getTrackHandler };
