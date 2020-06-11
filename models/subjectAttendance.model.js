module.exports = (sequelize, DataType) => {
    const SubjectAttendance = sequelize.define('subjectAttendance', {
        date: {
            type: DataType.DATEONLY
        }
    });

    return SubjectAttendance;
}
