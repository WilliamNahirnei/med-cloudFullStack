module.exports = app => {
    app.route('/status')
        .get((req, res) => {
            res.send('online')
        })
}