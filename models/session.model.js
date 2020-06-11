module.exports = (sequelize, DataType) => {
    const Session = sequelize.define('session', {
        name: {
            type: DataType.STRING 
        }
    });

    return Session;
}
