const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const comments = [];
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req, res) => {
    comments.push({name: req.body.name, message: req.body.message});
    console.log(comments);
    res.send(comments);
});

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`);
});