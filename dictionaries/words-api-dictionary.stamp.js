const stampit = require('stampit');
const axios = require('axios');
const { mashapeKey } = require('../config/private.config');
const Dictionary = require('./dictionary.stamp');

const baseURL = 'https://wordsapiv1.p.mashape.com/words/';

function getDefinitions(word) {
    return axios.get(`${baseURL}${word}/definitions`, {
        headers: {
            'Accept': 'application/json',
            'X-Mashape-Key': mashapeKey
        }
    });
}

const WordsApiDictionary = stampit()
.compose(Dictionary)
.methods({
    getDefinitions: getDefinitions
});

module.exports = WordsApiDictionary;
