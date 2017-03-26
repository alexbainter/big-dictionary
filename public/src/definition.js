import es6Promise from 'es6-promise';
import $ from 'jquery';
import { debounce } from 'lodash';
import './definition.scss';

if (!window.Promise) {
    es6Promise.polyfill();
}

const widthUnit = 'vw';
const wordSelector = '#word';
const hiddenWordSelector = '#hidden-word';

$(document).ready(function onDocumentReady() {
    setWordWidth().then(() => {
        $('.js-unhide-after-init').removeClass('hidden');
    })
});

$(window).resize(debounce(setWordWidth, 20));

function setWordWidth() {
    const hiddenWord = $(hiddenWordSelector);
    hiddenWord.removeClass('no-display');
    return findMaxWidth(hiddenWord).then((width) => {
        hiddenWord.addClass('no-display');
        $(wordSelector).css('font-size', width + widthUnit);
    });
}

function findMaxWidth(el) {
    return new Promise((resolve, reject) => {
        let size = 1;
        do {
            size = size + 1;
            el.css('font-size', size + widthUnit);
        } while (el.outerWidth() < window.innerWidth
            && el.outerHeight() < maxWordHeight())
        resolve(size - 2);
    });
}

function maxWordHeight() {
    return window.innerHeight / 2;
}
