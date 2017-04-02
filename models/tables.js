module.exports = function(sequelize, DataTypes) {
    // teachers table
    var teachers = sequelize.define("teachers", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: null,
            validate: {
                isEmail: true,
            }
        },
        schedule: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        notes: {
            type: DataTypes.STRING,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    });

    return teachers;
    teachers.sync();
    module.exports = teachers;
};