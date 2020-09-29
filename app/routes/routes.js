module.exports = app => {
  const geom = require("../controllers/controller.js");

  var router = require("express").Router();

  // Create a new Point
  router.post("/point", geom.createPoints);

  // Retrieve all Points
  router.get("/point", geom.getAllPoints);

  // Create a new Line
  router.post("/line", geom.createLines);

  // Retrieve all Lines
  router.get("/line", geom.getAllLines);

  // Create a new Polygon
  router.post("/polygon", geom.createPolygons);

  // Retrieve all Lines
  router.get("/polygon", geom.getAllPolygons);

  // Retrieve a single Point with id
  router.get("/:id", geom.findOne);

  // Update a Point with id
  router.put("/:id", geom.update);

  // Delete a Point with id
  router.delete("/:id", geom.delete);

  // Create a new Point
  router.delete("/", geom.deleteAll);

  app.use('/api', router);
};