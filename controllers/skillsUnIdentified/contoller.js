const model = require('../../models/skillsUnIdentified/CoursesSU');
const favoriteModel = require('../../models/skillsUnIdentified/FavoriteCoursesSU');

exports.addCourse = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return;
    }

    const record = new model({
        title: req.body.title,
        description: req.body.description,
        email: req.body.email,
        favorite: req.body.favorite,
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

exports.getAllCourses = (req, res) => {
    try {
        model.find({}, (err, result) => {
            if (err)
                console.log(err);

            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }
}

exports.updateCourse = (req, res) => {
    try {
        model.findByIdAndUpdate(req.params.id, req.body, async (err, result) => {
            if (err)
                console.log(err)

            if (req.body.favorite == true) {
                const obj = req.body;
                obj.oid = result._id;
                const record = new favoriteModel(obj)
                record
                    .save(record)
                    .then(data => {
                        //res.send(data)
                    })
                    .catch(err => {
                        // res.status(500).send({
                        //     message: err.message || "Some erro occurred while creating"
                        // })
                    })
            } else {
                try {
                    favoriteModel.deleteOne({ oid: result._id }, (err, result2) => {
                        if (err)
                            console.log(err)
                        // res.send(result2)
                    })
                } catch (error) {
                    console.log(error);
                }
            }
            await res.send(result)
        })

    } catch (error) {
        console.log(error);
    }
}


exports.getAllFavoriteCourses = (req, res) => {
    try {
        favoriteModel.find({}, (err, result) => {
            if (err)
                console.log(err);

            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }
}

exports.updateFavoriteCourse = (req, res) => {
    try {
        favoriteModel.findByIdAndUpdate(req.params.id, req.body, async (err, result) => {
            if (err)
                console.log(err)

            await res.send(result)
        })

    } catch (error) {
        console.log(error);
    }
}

exports.deleteFavoriteCourse = (req, res) => {
    try {
        favoriteModel.findByIdAndDelete(req.params.id, (err, result) => {
            if (err)
                console.log(err)

            model.findByIdAndUpdate(req.params.id, { favorite: false }, async (err, result2) => {
                if (err)
                    console.log(err)
            });

            res.send(result)
        })
    } catch (error) {
        console.log(error);
    }
}