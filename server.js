const express = require('express');
const { getDefinition } = require('./dictionary-integration');
const app = express();
const port = 8080;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Nothing here...')
});

app.get('/define/:word', (req, res) => {
    getDefinition(req.params.word).then((result) => {
        res.render('definition', result);
    }).catch((err) => {
        res.send('Not found!');
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
