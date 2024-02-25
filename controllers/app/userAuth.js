const { errorHandler } = require('../../utils/errorHandler');
const dbCon = require('../../config/db.config');
const { createHmac } = require('crypto');



exports.CheckLoginServe = (req, res) => {
    if (req.isLoggedIn == true) {
        res.status(200).send({msg:''})
    }
}

exports.Auth = async (req, res) => {
    let Email = (req.body.Email).trim()
    if (Email && req.body.Password) {
        const query = `SELECT id ,name,email, password FROM User_creds WHERE email ='${Email}' `;
        let queryUpdateTime = `UPDATE User_creds SET lastLoginAt = CONVERT_TZ(NOW(),\'+00:00\',\'+05:30\') WHERE email='${Email}';`;
        const hash = createHmac('sha256', 'zxcvbnmsdasgdrf').update(req.body.Password).digest('hex');
        await dbCon.query(query, (err, rows, fields) => {
            if (err) throw new errorHandler(404, 'Something wents wrong in this Mysql User Auth'+err);
            if (rows.length > 0) {
                if (Email == rows[0].email && hash == rows[0].password) {

                    dbCon.query(queryUpdateTime, [rows[0].id], (err) => { if (err) throw new errorHandler(404, err); })
                } else {
                    res.status(503).send({msg:'unauthorized'})
                }
            }
        })
    }
}
exports.logout = (req, res) => {
    let queryUpdateTime = `UPDATE employee SET lastLogoutAt = CONVERT_TZ(NOW(),\'+00:00\',\'+05:30\') WHERE email='${req.email_id}'`;
    req.session.destroy();
    dbCon.query(queryUpdateTime, (err) => { if (err) throw new errorHandler(404, err); })
    res.redirect(`/`)
}
