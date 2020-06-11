module.exports = (sequelize, DataType) => {
    const Exam = sequelize.define('exam', {
        name: {
            type: DataType.STRING 
        },
        time: {
            type: DataType.STRING
        },
        date: {
            type: DataType.DATEONLY
        }
    });

    return Exam;
}
