module.exports = (sequelize, DataType) => {
    const SchoolAttendance = sequelize.define('schoolAttendance', {
        present: {
            type: DataType.BOOLEAN
        },
        date: {
            type: DataType.DATEONLY
        },
    });

    return SchoolAttendance;
}
