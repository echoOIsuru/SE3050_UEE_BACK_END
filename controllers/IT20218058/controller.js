const CareerModel = require("../../models/IT20218058/CareersModel");
const RequestModel = require("../../models/IT20218058/RequestModel");

/**
 * Retrieve available career paths
 */
 exports.retrieveCareerPaths = async (req, res) => {
    const skill = req.body.skill;

        CareerModel.find({ "skill": skill })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Not Found Data With ID : " + id
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error Occured While Retrieving"
            })
        })
    
}

/**
 * Insert new request
 */
 exports.addRequest = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content Cannot Be Empty"
        });
        return;
    }

    const record = new RequestModel({
        name: req.body.name,
        contact: req.body.contact,
        profile: req.body.profile,
        job: req.body.job,
        status: "pending"
    })

    record.save(record)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error Occurred While Inserting"
            })
        })
}

/**
 * Retrieve all requests
 */
 exports.retrieveRequests = async (req, res) => {
    RequestModel.find()
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Not Found Data"
                })
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error Occured While Retrieving"
            })
        })
}

/**
 * Retrieve request data
 */
 exports.retrieveRequestData = async (req, res) => {
    const id = req.params.id;

    RequestModel.find({ "_id": id })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Not Found Data With ID : " + id
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error Occured While Retrieving"
            })
        })
}

/**
 * Delete a request
 */
 exports.deleteRequest = async (req, res) => {
    const id = req.params.id;

    RequestModel.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot Delete with id : ${id}`
                });
            } else {
                res.send({
                    message: "Record deleted successfully"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error Occured While Deleting"
            })
        })
}

/**
 * Update request
 */
 exports.updateRequest = async (req, res) => {

    try {
        RequestModel.findByIdAndUpdate(req.params.id, req.body, async (err, result) => {
            if (err) {
                res.send(err);
            } else {
                await res.send(result);
            }
        })
    } catch (err) {
        console.log(err);
    }
}