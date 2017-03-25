import es6Promise from 'es6-promise';
import $ from 'jquery';
import './definition.scss';

if (!window.Promise) {
    es6Promise.polyfill();
}

const widthUnit = 'vw';

$(document).ready(() => {
    const hiddenWord = $('#hidden-word');
    findMaxWidth(hiddenWord).then((width) => {
        hiddenWord.addClass('no-display');
        $('#word').css('font-size', width + widthUnit);
        $('.js-unhide-after-init').removeClass('hidden');
    });
});

function findMaxWidth(el) {
    return new Promise((resolve, reject) => {
        let size = 1;
        do {
            size = size + 1;
            el.css('font-size', size + widthUnit);
        } while (el.outerWidth() < window.innerWidth
            && el.outerHeight() < window.innerHeight / 2)
        resolve(size - 1);
    });
}
