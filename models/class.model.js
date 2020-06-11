module.exports = (sequelize, Sequelize) => {
    const Classes = sequelize.define('class', {
        name: {
            type: Sequelize.STRING 
        }
    });

    return Classes;
}