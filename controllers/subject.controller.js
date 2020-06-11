const db = require("../models");
const Subject = db.subjects;
// const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Name can not be empty!"
        });
        return;
    }

  const subject = {
    name: req.body.name,
    code: req.body.code
  };

  Subject.create(subject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the subject."
      });
    });
};

exports.findAll = (req, res) => {

    Subject.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving subjects."
        });
    });
};
