const request = require("../../models/fundDonor/createDonation");


exports.addDonation = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const record = new request({
        request_id: req.body.request_id,
        name: req.body.name,
        donation_type: req.body.donation_type, 
   
    })

    record
        .save(record)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some erro occurred while creating"
            })
        })
}




exports.findall = async (req, res) => {

    try {
        const requests = await request.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(400).json(error);
    }
};



exports.findbyid = async (req, res) => {

    const StudentId = req.params.id;
    try {
        const Student = await request.findById(StudentId);
        res.status(200).json(Student);

        if (!Student) {
            return res.status(404).json("No Student found for the given id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};


exports.delete = (req, res) => {

    request.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err)
            res.send(err)

        res.send(result)
    })
}




exports.update= (req, res) => {

    let userId = req.params.id;
    const {  request_id,name,donation_type, } = req.body;

    const updaterequest = {
        request_id, 
        name,  
        donation_type,
         
    }
   request.findByIdAndUpdate(userId, updaterequest).then(() => {
        res.status(200).send({ status: "successfully updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "error with updating data" });
    })

}


//get all students by id
exports.getDoctorsAppointments = async (req, res) => {

    const DoctorId = req.params.id;
    try {
        const appointments = await request.find({doctorID: DoctorId});
        res.status(200).json(appointments);

        if (!appointments) {
            return res.status(404).json("No appointments found for the given doctor id!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

