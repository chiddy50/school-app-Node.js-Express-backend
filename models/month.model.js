module.exports = (sequelize, DataType) => {
    const Month = sequelize.define('month', {
        name: {
            type: DataType.STRING 
        }
    });

    return Month;
}
