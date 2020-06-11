module.exports = function(sequelize, Sequelize) {
    const Tutorial = sequelize.define("student", {
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        roll_no: {
            type: Sequelize.STRING,
            unique: true
        },
        doa: {
            type: Sequelize.DATEONLY
        },
        dob: {
            type: Sequelize.DATEONLY
        },
        email: {
            type: Sequelize.STRING
        }
    })

    return Tutorial;
};  