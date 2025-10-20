const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
require('dotenv').config();

const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
    const db = req.app.locals.db;
    const { name, email, password } = req.body;

    try {
        // Cek apakah email sudah terdaftar
        const snapshot = await db.collection('users').where('email', '==', email).get();
        if (!snapshot.empty) {
            return res.status(400).json({ msg: 'Email sudah terdaftar' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user baru ke Firestore
        const newUser = {
            name,
            email,
            password: hashedPassword,
            createdAt: new Date()
        };
        await db.collection('users').add(newUser);

        res.status(201).json({ msg: 'Registrasi berhasil!' });
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    const db = req.app.locals.db;
    const { email, password } = req.body;

    try {
        // Cari user berdasarkan email
        const snapshot = await db.collection('users').where('email', '==', email).get();
        if (snapshot.empty) {
            return res.status(400).json({ msg: 'Email tidak ditemukan' });
        }

        const userDoc = snapshot.docs[0];
        const user = userDoc.data();

        // Cek password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Password salah' });
        }

        // Buat JWT Token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({
            msg: 'Login sukses!',
            token,
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error });
    }
});


router.get('/profile', auth, async (req, res) => {
    const db = req.app.locals.db;
    try {
        const userEmail = req.user.email;

        // Ambil data user dari Firestore berdasarkan email
        const snapshot = await db.collection('users').where('email', '==', userEmail).get();
        if (snapshot.empty) {
            return res.status(404).json({ msg: 'User tidak ditemukan' });
        }

        const user = snapshot.docs[0].data();

        // Jangan kirim password ke response
        delete user.password;

        res.json({
            msg: 'Data profil berhasil diambil',
            user
        });
    } catch (error) {
        res.status(500).json({ msg: 'Server error', error });
    }
});

module.exports = router;
