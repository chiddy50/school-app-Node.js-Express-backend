const db = require("../models");
const Class = db.classes;
const Op = db.Sequelize.Op;

// Create and Save a new Class
exports.create = (req, res) => {
    // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Classes
  const newClass = {
    name: req.body.name,
  };
  // Save Tutorial in the database
  Class.create(newClass)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Classes."
      });
    });
};

// Retrieve all Classes from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Class.findAll({ where: condition, include:["students"] })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving classes."
        });
    });
};

// Find a single Class with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Class.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Class with id=" + id
        });
    });
};

// Update a Class by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Class.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Class was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Class with id=${id}. Maybe Class was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Class with id=" + id
        });
    });
};

// Delete a Class with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Class.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Class was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Class with id=${id}. Maybe Class was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Class with id=" + id
        });
    });
};

// Delete all Classes from the database.
exports.deleteAll = (req, res) => {
    Class.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Classes were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all classes."
        });
    });
}

