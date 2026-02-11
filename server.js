const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Routes
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});