const dictionary = [
    {
        word: 'lorem',
        definition: 'Lorem ipsum sit dolor amet'
    },
    {
        word: 'ipsum',
        definition: 'Lorem ipsum sit dolor amet'
    }
];

function getDefinition(queryWord) {
    queryWord = queryWord.toLowerCase();
    let match;
    const matchFound = dictionary.some((entry) => {
        match = entry;
        return entry.word === queryWord;
    });
    if (matchFound) {
        return match;
    }
}

module.exports = {
    getDefinition
}
