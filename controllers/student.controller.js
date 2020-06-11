const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new student
exports.create = (req, res) => {
    // Validate request
  if (!req.body.firstname) {
    res.status(400).send({
      message: "Firstname can not be empty!"
    });
    return;
  }

  // Create a student
  const student = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    roll_no: req.body.rollNo,
    doa: req.body.doa,
    dob: req.body.dob,
    classId: req.body.class,
    sectionId: req.body.section,
    parentId: req.body.parent,
    groupId: req.body.group,
    genderId: req.body.gender,
  };

  // Save student in the database
  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student."
      });
    });
};

// Retrieve all students from the database.
exports.findAll = (req, res) => {
    const firstname = req.query.firstname;
    var condition = firstname ? { firstname: { [Op.like]: `%${firstname}%` } } : null;

    Student.findAll({ where: condition, include: ['class', 'section', 'parent', 'group', 'gender'] })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
};