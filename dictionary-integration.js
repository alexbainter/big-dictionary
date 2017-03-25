const wordsApiDictionary = require('./dictionaries/words-api-dictionary.stamp')();

function getDefinition(word) {
    word = word.toLowerCase();
    return wordsApiDictionary.getDefinitions(word).then((result) => result.data);
}

module.exports = {
    getDefinition
}
