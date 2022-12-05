const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

require('./routes/products')(app);

app.listen(5000);