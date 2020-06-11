module.exports = (sequelize, DataType) => {
    const Subject = sequelize.define('subject', {
        name: {
            type: DataType.STRING 
        },
        code: {
            type: DataType.STRING
        }
    });

    return Subject;
}
