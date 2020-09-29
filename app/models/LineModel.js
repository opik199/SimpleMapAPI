module.exports = (sequelize, Sequelize) => {
  const Line = sequelize.define("lines", {
    Nama: {
      type: Sequelize.STRING
    },
    Geom: {
      type: Sequelize.DataTypes.GEOMETRY('LINESTRING', 4326)
    },
    Panjang: {
      type: Sequelize.DataTypes.DOUBLE
    }
  });

  return Line;
};