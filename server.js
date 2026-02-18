const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// TRZ-7789 SECURITY PROTOCOL
// SERVE STATIC FILES
app.use(express.static(__dirname));

// MAIN ROUTE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// START ENGINE
app.listen(port, () => {
    console.log(`TRINITY ENGINE V10.2.8 ONLINE ON PORT ${port}`);
});
