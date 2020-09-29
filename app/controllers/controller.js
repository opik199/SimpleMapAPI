const db = require("../models");
const Point = db.points;
const Line = db.lines;
const Polygon = db.polygons;
const Op = db.Sequelize.Op;

exports.createPoints = (req, res) => {
	var marker = req.body.marker;

	if (!marker) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	var resultData = []; var errMsgs = [];

	marker.forEach(function(arr) {
		// Create a Point Geometry
		var pointGeom = { 
			type: 'Point', 
			coordinates: [arr.lat,arr.lng],
			crs: { type: 'name', properties: { name: 'EPSG:4326'} }
		};
		const point = {
			Nama: arr.nama,
			Geom: pointGeom
		};

		// Save Point in the database
		Point.create(point)
		.then(data => {
			resultData.push(data);
			//res.send(data);
		})
		.catch(err => {
			errMsgs.push(err.message);
			// res.status(500).send({
			// message:
				// err.message || "Some error occurred while creating the Point."
			// });
		});
	});

	console.log(resultData);
	if (errMsgs.length == 0) res.send(resultData);
	else 
		res.status(500).send({
		message:
			errMsgs || "Some error occurred while creating the Point."
	});
};

exports.createLines = (req, res) => {
	var marker = req.body.marker;

	if (!marker) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}
		console.log(marker);

	var resultData = []; var errMsgs = [];

	marker.forEach(function(arr) {
		console.log(arr);
		// Create a Line Geometry
		var lineGeom = { 
			type: 'Linestring', 
			coordinates: [[arr.coor[0].lat,arr.coor[0].lng],[arr.coor[1].lat,arr.coor[1].lng]],
			crs: { type: 'name', properties: { name: 'EPSG:4326'} }
		};
		const line = {
			Nama: arr.nama,
			Geom: lineGeom
		};

		// Save Line in the database
		Line.create(line)
		.then(data => {
			resultData.push(data);
			//res.send(data);
		})
		.catch(err => {
			errMsgs.push(err.message);
			// res.status(500).send({
			// message:
				// err.message || "Some error occurred while creating the Point."
			// });
		});
	});

	console.log(resultData);
	if (errMsgs.length == 0) res.send(resultData);
	else 
		res.status(500).send({
		message:
			errMsgs || "Some error occurred while creating the Point."
	});
};

exports.createPolygons = (req, res) => {
	console.log("====================");
	console.log("Start");
	console.log("====================");
	var marker = req.body.marker;

	if (!marker) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}
		console.log(marker);

	var resultData = []; var errMsgs = [];

	marker.forEach(function(arr) {
		var coorList = [];

		arr.coor.forEach(function(coor) {
			coorList.push([coor.lat, coor.lng]);
		});

		console.log(coorList);
		// Create a Polygon Geometry
		var polyGeom = { 
			type: 'Polygon', 
			coordinates: coorList,
			crs: { type: 'name', properties: { name: 'EPSG:4326'} }
		};
		const polygon = {
			Nama: arr.nama,
			Geom: polyGeom
		};

		// Save Polygon in the database
		Polygon.create(polygon)
		.then(data => {
			resultData.push(data);
			//res.send(data);
		})
		.catch(err => {
			errMsgs.push(err.message);
			// res.status(500).send({
			// message:
				// err.message || "Some error occurred while creating the Point."
			// });
		});
	});

	console.log(resultData);
	if (errMsgs.length == 0) res.send(resultData);
	else 
		res.status(500).send({
		message:
			errMsgs || "Some error occurred while creating the Point."
	});
};

// Retrieve all Points from the database.
exports.getAllPoints = (req, res) => {
	const nama = req.query.nama;
	var condition = nama ? { nama: { [Op.nama]: `%${nama}%` } } : null;

	Point.findAll({ where: condition })
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
		message:
			err.message || "Some error occurred while retrieving points."
		});
	});
};

// Retrieve all Lines from the database.
exports.getAllLines = (req, res) => {
	const nama = req.query.nama;
	var condition = nama ? { nama: { [Op.nama]: `%${nama}%` } } : null;

	Line.findAll({ where: condition })
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
		message:
			err.message || "Some error occurred while retrieving lines."
		});
	});
};

// Retrieve all Polygons from the database.
exports.getAllPolygons = (req, res) => {
	const nama = req.query.nama;
	var condition = nama ? { nama: { [Op.nama]: `%${nama}%` } } : null;

	Polygon.findAll({ where: condition })
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
		message:
			err.message || "Some error occurred while retrieving polygons."
		});
	});
};

// Find a single Point with an id
exports.findOne = (req, res) => {
	
};

// Update a Point by the id in the request
exports.update = (req, res) => {
	
};

// Delete a Point with the specified id in the request
exports.delete = (req, res) => {
	
};

// Delete all Points from the database.
exports.deleteAll = (req, res) => {
	
};
