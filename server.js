const express = require('express');
const { getDefinition } = require('./lib/dictionary-integration');
const greetings = require('./lib/greetings');
const app = express();
const port = 8080;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
    res.redirect('/' + randomGreeting);
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
