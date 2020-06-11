module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define('gender', {
        name: {
            type: Sequelize.STRING 
        }
    });

    return Group;
}
