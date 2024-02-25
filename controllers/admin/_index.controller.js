const dbCon = require('../../config/db.config')


// All Index routes
exports.indexDeshboard = async (req, res) => {
    if (req.session.isLoggedIn == true && req.session.role == 'admin') {

        res.status(200).send('Welcome')

    }

}
