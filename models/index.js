const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
//   operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.students = require("./student.model.js")(sequelize, Sequelize);
db.classes = require("./class.model.js")(sequelize, Sequelize);
db.sections = require("./section.model.js")(sequelize, Sequelize);
db.groups = require("./group.model.js")(sequelize, Sequelize);
db.parents = require("./parent.model.js")(sequelize, Sequelize);
db.genders = require("./gender.model.js")(sequelize, Sequelize);
db.subjects = require("./subject.model.js")(sequelize, Sequelize);
db.grades = require("./grade.model.js")(sequelize, Sequelize);
db.months = require("./month.model.js")(sequelize, Sequelize);
db.sessions = require("./session.model.js")(sequelize, Sequelize);
db.terms = require("./term.model.js")(sequelize, Sequelize);
db.exams = require("./exam.model.js")(sequelize, Sequelize);
db.subjectAttendances = require("./subjectAttendance.model.js")(sequelize, Sequelize);
db.examResults = require("./examResult.model.js")(sequelize, Sequelize);
db.schoolAttendances = require("./schoolAttendance.model.js")(sequelize, Sequelize);


/**=================
 * STUDENT RELATIONS
 * =================
 */
db.classes.hasMany(db.students, { as: "students" });
db.sections.hasMany(db.students, { as: "students" });
db.parents.hasMany(db.students, { as: "students" });
db.groups.hasMany(db.students, { as: "students" });
db.genders.hasMany(db.students, { as: "students" });

db.students.belongsTo(db.classes, {
  foreignKey: "classId",
  as: 'class'
});

db.students.belongsTo(db.sections, {
  foreignKey: "sectionId",
  as: 'section'
});

db.students.belongsTo(db.parents, {
  foreignKey: "parentId",
  as: 'parent'
});

db.students.belongsTo(db.groups, {
  foreignKey: "groupId",
  as: 'group'
});

db.students.belongsTo(db.genders, {
  foreignKey: "genderId",
  as: 'gender'
});
//======================
// STUDENT RELATIONS END
//======================



/**==============
 * EXAM RELATIONS
 * ==============
 */
db.subjects.hasMany(db.exams, { as: "exams" });
db.sections.hasMany(db.exams, { as: "exams" });
db.classes.hasMany(db.exams, { as: "exams" });
db.groups.hasMany(db.exams, { as: "exams" });
db.terms.hasMany(db.exams, { as: "exams" });
db.sessions.hasMany(db.exams, { as: "exams" });

db.exams.belongsTo(db.classes, {
  foreignKey: "classId",
  as: 'class'
});

db.exams.belongsTo(db.sections, {
  foreignKey: "sectionId",
  as: 'section'
});

db.exams.belongsTo(db.subjects, {
  foreignKey: "subjectId",
  as: 'subject'
});

db.exams.belongsTo(db.groups, {
  foreignKey: "groupId",
  as: 'group'
});

db.exams.belongsTo(db.terms, {
  foreignKey: "termId",
  as: 'term'
});

db.exams.belongsTo(db.sessions, {
  foreignKey: "sessionId",
  as: 'session'
});
//===================
// EXAM RELATIONS END
//===================


/**============================
 * SUBJECT ATTENDANCE RELATIONS
 * ============================
 */
db.subjects.hasMany(db.subjectAttendances, { as: "subjectAttendances" });
db.students.hasMany(db.subjectAttendances, { as: "subjectAttendances" });
db.months.hasMany(db.subjectAttendances, { as: "subjectAttendances" });
db.sessions.hasMany(db.subjectAttendances, { as: "subjectAttendances" });

db.subjectAttendances.belongsTo(db.subjects, {
  foreignKey: "subjectId",
  as: 'subject'
});

db.subjectAttendances.belongsTo(db.students, {
  foreignKey: "studentId",
  as: 'student'
});

db.subjectAttendances.belongsTo(db.months, {
  foreignKey: "monthId",
  as: 'month'
});

db.subjectAttendances.belongsTo(db.sessions, {
  foreignKey: "sessionId",
  as: 'session'
});
//=================================
// SUBJECT ATTENDANCE RELATIONS END
//=================================


/**=====================
 * EXAM RESULT RELATIONS
 * =====================
 */
db.students.hasMany(db.examResults, { as: "examResults" });
db.subjects.hasMany(db.examResults, { as: "examResults" });
db.grades.hasMany(db.examResults, { as: "examResults" });
db.terms.hasMany(db.examResults, { as: "examResults" });
db.sessions.hasMany(db.examResults, { as: "examResults" });
db.classes.hasMany(db.examResults, { as: "examResults" });
db.sections.hasMany(db.examResults, { as: "examResults" });

db.examResults.belongsTo(db.students, {
  foreignKey: "studentId",
  as: 'student'
});

db.examResults.belongsTo(db.sections, {
  foreignKey: "sectionId",
  as: 'section'
});

db.examResults.belongsTo(db.classes, {
  foreignKey: "classId",
  as: 'class'
});

db.examResults.belongsTo(db.subjects, {
  foreignKey: "subjectId",
  as: 'subject'
});

db.examResults.belongsTo(db.grades, {
  foreignKey: "gradeId",
  as: 'grade'
});

db.examResults.belongsTo(db.terms, {
  foreignKey: "termId",
  as: 'term'
});

db.examResults.belongsTo(db.sessions, {
  foreignKey: "sessionId",
  as: 'session'
});
 //=====================
 //EXAM RESULT RELATIONS
 //=====================


/**===========================
 * SCHOOL ATTENDANCE RELATIONS
 * ==========================
 */

db.students.hasMany(db.schoolAttendances, { as: "schoolAttendances" });
db.months.hasMany(db.schoolAttendances, { as: "schoolAttendances" });
db.sessions.hasMany(db.schoolAttendances, { as: "schoolAttendances" });

db.schoolAttendances.belongsTo(db.students, {
  foreignKey: "studentId",
  as: 'student'
});

db.schoolAttendances.belongsTo(db.months, {
  foreignKey: "monthId",
  as: 'month'
});

db.schoolAttendances.belongsTo(db.sessions, {
  foreignKey: "sessionId",
  as: 'session'
});

// ==============================
//SCHOOL ATTENDANCE RELATIONS END
//===============================
db.subjects.belongsToMany(db.groups, {
  through: "subject_group",
  as: "groups",
  foreignKey: "subject_id",
});

db.groups.belongsToMany(db.subjects, {
  through: "subject_group",
  as: "subjects",
  foreignKey: "group_id",
});

/**==========================
 * SUBJECT GROUP RELATIONSHIP
 * ==========================
 */


//SUBJECT GROUP RELATIONSHIP END








module.exports = db;



