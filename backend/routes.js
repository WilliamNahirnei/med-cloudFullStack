const PatientController = require("./api/Patient/PatientController")

module.exports = app => {
    app.route('/status')
        .get((req, res) => {
            res.send('online')
        })
    
    app.route('/patient')
        .get((request, response) => {
            console.log(PatientController)
            PatientController.index(request, response)
        })
}