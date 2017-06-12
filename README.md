# big-dictionary
This is a little site I made for fun. It displays definitions for words, and allows users to click any word on the site to see that word's definition.

## Installation
### Prerequisites
You will need to install the latest [Node.js](https://nodejs.org/en/) to run the site locally.

You will also need to create an account at the [Mashape Marketplace](https://market.mashape.com/) to get an API key for the [Words API](https://www.wordsapi.com/).
With your Words API key, create a file in the `config` directory called `private.config.js`.
Have this file export your key like so:
```javascript
const config = {
    mashapeKey: 'your_api_key_here'
};

module.exports = config;
```

### Steps
1. Clone the repository and navigate to it.
1. Run `npm install` from a command prompt.
1. Run `npm run dev` from a command prompt to build and start the site.
1. Navigate to http://localhost:8080 to view the site.
