module.exports = (sequelize, Sequelize) => {
  const Polygon = sequelize.define("polygons", {
    Nama: {
      type: Sequelize.STRING
    },
    Geom: {
      type: Sequelize.DataTypes.GEOMETRY('POLYGON', 4326)
    },
    LuasArea: {
      type: Sequelize.DataTypes.DOUBLE
    }
  });

  return Polygon;
};