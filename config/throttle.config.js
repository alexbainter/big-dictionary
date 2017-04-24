const throttleOptions = {
    burst: 15,
    period: 'day',
    on_throttled: (req, res, next, bucket) => {
        res.render('throttled');
    }
}


module.exports = throttleOptions;
