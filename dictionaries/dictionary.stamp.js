const stampit = require('stampit');

const Dictionary = stampit()
.init(function() {
    if (typeof this.getDefinitions !== 'function') {
        throw new Error('getDefinitions is not implemented.')
    }
});

module.exports = Dictionary;
