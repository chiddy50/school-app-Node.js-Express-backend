module.exports = function(sequelize, Sequelize) {
    const Tutorial = sequelize.define("parent", {
        fullname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        phone: {
            type: Sequelize.STRING
        }
    });

    return Tutorial;
};  