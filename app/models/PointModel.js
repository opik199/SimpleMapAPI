module.exports = (sequelize, Sequelize) => {
  const Point = sequelize.define("points", {
    Nama: {
      type: Sequelize.STRING
    },
    Geom: {
      type: Sequelize.DataTypes.GEOMETRY('POINT', 4326)
    }
  });

  return Point;
};