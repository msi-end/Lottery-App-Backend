const dbCon = require('../../config/db.config')


// All Index routes
exports.test = async (req, res) => {
    res.status(200).send('Welcome')
}

