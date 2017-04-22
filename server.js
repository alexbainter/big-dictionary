const express = require('express');
const compression = require('compression');
const throttle = require('express-throttle');
const { getDefinition } = require('./lib/dictionary-integration');
const greetings = require('./lib/greetings');
const throttleOptions = require('./config/throttle.config');
const app = express();
const port = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(compression());

app.use(express.static('public'));

app.get('/', (req, res) => {
    const randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
    res.redirect('/' + randomGreeting);
});

app.get('/:word', throttle(throttleOptions), (req, res) => {
    const word = req.params.word.replace(/[^a-z]/gi, '');
    getDefinition(word).then((result) => {
        res.render('definition', result);
    }).catch((err) => {
        if (err.response.status === 404) {
            res.render('not-found', { word });
        }
    })
});

app.get('*', (req, res) => {
    res.redirect('/no');
});

app.use((err, req, res, next) => {
    res.send('Sorry, something went wrong.');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
