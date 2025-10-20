const express = require('express');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

// Middleware JSON
app.use(express.json());

// Inisialisasi Firebase
const serviceAccount = require('./fbkey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
app.locals.db = db;

// Route
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
});
