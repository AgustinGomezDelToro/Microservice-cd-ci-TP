const express = require('express');
const app = express();
const doctorRoutes = require('./routes/doctorRoutes');

app.use('/', doctorRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Doctor microservice running on port ${PORT}`));
