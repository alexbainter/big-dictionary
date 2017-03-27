const wordsApiDictionary = require('./dictionaries/words-api-dictionary.stamp')();

function getDefinition(word) {
    word = word.toLowerCase();
    return wordsApiDictionary.getDefinitions(word).then(({ data }) => {
        data.results = data.results || [];
        return data;
    });
}

module.exports = {
    getDefinition
}
