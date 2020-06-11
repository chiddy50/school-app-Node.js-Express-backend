const db = require("../models");
const Grade = db.grades;
const Session = db.sessions;
const Term = db.terms;
const Month = db.months;
// const Op = db.Sequelize.Op;

/**=================
 * GRADES CONTROLLER
 * =================
 */
exports.createGrade = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Name can not be empty!"
        });
        return;
    }

  const grade = {
    name: req.body.name,
    percent_from: req.body.percent_from,
    percent_to: req.body.percent_to,
    comment: req.body.comment,
    description: req.body.description
  };

  Grade.create(grade)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the grade."
      });
    });
};

exports.findAllGrades = (req, res) => {

    Grade.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving grades."
        });
    });
};

/**=====================
 * GRADES CONTROLLER END
 * =====================
 */


/**======================
 * SESSIONS CONTROLLER
 * ======================
 */
exports.createSession = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Name can not be empty!"
        });
        return;
    }

  const session = {
    name: req.body.name
  };

  Session.create(session)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the session."
      });
    });
};

exports.findAllSessions = (req, res) => {

    Session.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sessions."
        });
    });
};
/**=======================
 * SESSIONS CONTROLLER END
 * =======================
 */


/**================
 * TERMS CONTROLLER 
 * ================
 */
exports.createTerm = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can not be empty!"
        });
        return;
    }else if(!req.body.alias){
        res.status(400).send({
            message: "Alias can not be empty!"
        });
        return;
    }

  const term = {
    name: req.body.name,
    alias: req.body.alias
  };

  Term.create(term)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the term."
      });
    });
};

exports.findAllTerms = (req, res) => {

    Term.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving terms."
        });
    });
};
/**====================
 * TERMS CONTROLLER END
 * ====================
 */

/**
 * ================
 * MONTH CONTROLLER
 * ================
 */
exports.createMonth = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can not be empty!"
        });
        return;
    }

  const month = {
    name: req.body.name
  };

  Month.create(month)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the month."
      });
    });
};

exports.findAllMonths = (req, res) => {

    Month.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving months."
        });
    });
};

/**====================
 * MONTH CONTROLLER END
 * ====================
 */