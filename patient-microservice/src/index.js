const express = require('express');
const app = express();
const patientRoutes = require('./routes/patientRoutes');

app.use('/', patientRoutes);

const PORT = process.env.PORT || 3002; // Asegúrate de que este puerto sea único
app.listen(PORT, () => console.log(`Patient microservice running on port ${PORT}`));
