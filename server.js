const express = require('express');
const { getDefinition } = require('./lib/dictionary-integration');
const greetings = require('./lib/greetings');
const app = express();
const port = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
    res.redirect('/' + randomGreeting);
});

app.get('/:word', (req, res, next) => {
    const word = req.params.word.replace(/[^a-z]/gi, '');
    getDefinition(word).then((result) => {
        res.render('definition', result);
    }).catch((err) => {
        if (err.response.status === 404) {
            res.render('not-found', { word });
        }
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
