module.exports = function(sequelize, DataTypes) {
    var table1 = sequelize.define("table1", {
        col1: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        col2: {
            type: DataTypes.STRING,
            defaultValue: "Not Available"
        },
        col3: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    return table1;
    table1.sync();
    module.exports = table1;
};