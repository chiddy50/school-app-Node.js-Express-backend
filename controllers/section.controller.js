const db = require("../models");
const Section = db.sections;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
  if (!req.body.name || !req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Section
  const section = {
    name: req.body.name,
    code: req.body.code
  };

  // Save Tutorial in the database
  Section.create(section)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Section."
      });
    });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Section.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sections."
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Section.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Section was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Section with id=${id}. Maybe Section was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Section with id=" + id
        });
    });
};