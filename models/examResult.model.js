module.exports = (sequelize, DataType) => {
    const ExamResult = sequelize.define('examResult', {
        first_ca: {
            type: DataType.INTEGER
        },
        second_ca: {
            type: DataType.INTEGER
        },
        exam: {
            type: DataType.INTEGER
        },
        total: {
            type: DataType.INTEGER
        },
        date: {
            type: DataType.DATEONLY
        },
    });

    return ExamResult;
}
