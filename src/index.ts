import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

require('./routes/products')(app);
require('./routes/logging')(app);

app.listen(5000);