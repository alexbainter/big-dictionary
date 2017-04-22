const throttleOptions = {
    burst: 50,
    period: 'hour',
    on_throttled: (req, res, next, bucket) => {
        res.render('throttled');
    }
}


module.exports = throttleOptions;
