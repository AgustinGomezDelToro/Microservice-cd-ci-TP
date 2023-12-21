const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use('/', authRoutes);

const PORT = process.env.PORT || 3000; // Puedes cambiar 3000 por otro puerto si lo deseas
app.listen(PORT, () => console.log(`Auth microservice running on port ${PORT}`));
