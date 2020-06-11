module.exports = (sequelize, DataType) => {
    const Grade = sequelize.define('grade', {
        name: {
            type: DataType.STRING 
        },
        percent_from: {
            type: DataType.INTEGER
        },
        percent_to: {
            type: DataType.INTEGER
        },
        comment: {
            type: DataType.STRING
        },
        description: {
            type: DataType.STRING
        }
    });

    return Grade;
}
