const throttleOptions = {
    burst: 80,
    period: 'day',
    key: () => 1,   // throttle entire site
    on_throttled: (req, res, next, bucket) => {
        res.render('throttled');
    }
}


module.exports = throttleOptions;
