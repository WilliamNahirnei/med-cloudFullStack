const PatientController = require("./api/Patient/PatientController")

module.exports = app => {
    app.route('/status')
        .get((req, res) => {
            res.send('online')
        })
    
    app.route('/patient')
        .get((request, response) => {
            PatientController.index(request, response)
        })
        .post((request, response) => {
            PatientController.store(request, response)
        })
    app.route('/patient/:idPatient')
        .get((request, response) => {
            PatientController.show(request, response)
        })
    app.route('/patient/:idPatient')
        .put((request, response) => {
            PatientController.update(request, response)
        })
    app.route('/patient/:idPatient/delete')
        .delete((request, response) => {
            PatientController.delete(request, response)
        })
    app.route('/patient/:idPatient/deactive')
        .delete((request, response) => {
            PatientController.deactive(request, response)
        })
    app.route('/patient/:idPatient/active')
        .put((request, response) => {
            PatientController.active(request, response)
        })
}