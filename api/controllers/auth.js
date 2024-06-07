const users = require('../models/users');

const login = (req, res) => {
    const { email, password } = req.body;
    res.send('ok')
}

module.exports = login