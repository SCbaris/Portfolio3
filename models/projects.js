module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", { // This is my project database
        name: {
            type: DataTypes.STRING, // I'm going to write project name here
            allowNull: false 
        },   
        creators : {
            type: DataTypes.STRING, // project creators. If it is group project, it will show there are more than 1 creator.
            allowNull: false
        },
        instructions: { 
            type: DataTypes.STRING(1000), // project explanation.
            allowNull: false
        },
        pic: {
            type: DataTypes.STRING, // And project picture location. Can be url or local picture. I will use local for now.
            allowNull: false
        },
        gitHub: {
            type: DataTypes.STRING,
        },
        projectLink: {
            type: DataTypes.STRING,
        }
    });
    return Projects; // Returning project.
  };