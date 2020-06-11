module.exports = (sequelize, DataType) => {
    const Term = sequelize.define('term', {
        name: {
            type: DataType.STRING 
        },
        alias: {
            type: DataType.STRING
        }
    });

    return Term;
}
