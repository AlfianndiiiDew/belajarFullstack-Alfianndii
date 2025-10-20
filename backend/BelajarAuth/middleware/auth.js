const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
    const authHeader = req.header('Authorization');

    if (!authHeader)
        return res.status(401).json({ msg: 'Akses ditolak: tidak ada token' });

    try {
        // Format token di header: "Bearer tokenjwt"
        const token = authHeader.replace('Bearer ', '');
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified; // simpan data payload ke req.user
        next();
    } catch (error) {
        res.status(400).json({ msg: 'Token tidak valid' });
    }
}

module.exports = auth;
