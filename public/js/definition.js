(function() {
    document.addEventListener('DOMContentLoaded', function(event) {
        var hiddenWord = document.getElementById('hidden-word');
        findMaxWidth(hiddenWord);
    });

    function findMaxWidth(el) {
        var lastSize = 1
        var size = lastSize;
        var unit = 'vw';
        do {
            var lastSize = size;
            el.style['font-size'] = size++ + unit;
        } while (el.scrollWidth < window.innerWidth)
        el.style['font-size'] = lastSize + unit;
    }
})();
