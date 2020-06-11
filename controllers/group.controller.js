const db = require("../models");
const Group = db.groups;
const Subject = db.subjects;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const group = {
    name: req.body.name,
  };

  Group.create(group)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Group."
      });
    });
};

exports.addSubject = (req, res) => {
    return Group.findByPk(req.body.groupId)
        .then(() => {
            if (!group) {
                console.log("Group not found");
                return null;
            }

            return Subject.findByPk(req.body.subId)
            .then((subject) => {
                if (!subject) {
                    console.log("Subject not found");
                    return null;
                }

                group.addSubject(subject);
                console.log(`>> added Subject id=${subject.id} to group id=${group.id}`);
                return group;
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log("Error while adding Subject to Group ", err) );
}

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Group.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving group."
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Group.update(req.body, {
        where: { id: id }
    })
    .then((num) => {
        if (num == 1) {
            res.send({
                message: "Group was updated successfully.",
            });
        } else {
            res.send({
                message: `Cannot update Group with id=${id}. Maybe Group was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Group with id=" + id
        });
    });
};