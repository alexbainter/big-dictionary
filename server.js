const express = require('express');
const { getDefinition } = require('./lib/dictionary-integration');
const app = express();
const port = 8080;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/welcome');
});

app.get('/:word', (req, res) => {
    const word = req.params.word.replace(/[^a-z]/gi, '');
    getDefinition(word).then((result) => {
        res.render('definition', result);
    }).catch((err) => {
        res.send('Not found!');
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
