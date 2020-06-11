const db = require("../models");
const Parent = db.parents;
const Op = db.Sequelize.Op;

// Create and Save a new Parent
exports.create = (req, res) => {
    // Validate request
  if (!req.body.fullname) {
    res.status(400).send({
      message: "Fullname can not be empty!"
    });
    return;
  }

  // Create a Parent
  const parent = {
    fullname: req.body.fullname,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    gender: req.body.gender
  };

  // Save Tutorial in the database
  Parent.create(parent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Parent."
      });
    });
};

// Retrieve all Parents from the database.
exports.findAll = (req, res) => {
    const fullname = req.query.fullname;
    var condition = fullname ? { fullname: { [Op.like]: `%${fullname}%` } } : null;

    Parent.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving parents."
        });
    });
};

// Find a single Parent with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Parent.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Parent with id=" + id
        });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Parent.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Parent was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Parent with id=${id}. Maybe Parent was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Parent with id=" + id
        });
    });
};

// Delete a Parent with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Parent.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Parent was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Parent with id=${id}. Maybe Parent was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Parent with id=" + id
        });
    });
};

// Delete all Parents from the database.
exports.deleteAll = (req, res) => {
    Parent.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Parents were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all parents."
        });
    });
}

