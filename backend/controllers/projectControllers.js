const { Project, Kandydaci } = require("../models/project");  //to są ścieżki na stronie www
const mongo = require("mongodb"); //import biblioteki mongo

const project_get_all = (req, res) => {
    console.log(Project);
	Project.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(400).send(`There is an error in the server while loading Kandydacis`);
		});
};

const project_get_byID = ( req, res ) => {
	console.log(Project);
	const id = req.params.id;
	Project.findById(id)
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const kandydaci_get_all = (req, res) => {
	console.log( Kandydaci );
	Kandydaci.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(400).send(`There is an error in the server while loading projects`);
		});
};

const kandydaci_create = (req, res) => {
	console.log(req.body, "req0");
	const kandydaci1 = new Kandydaci(req.body);
	Kandydaci
		.create({
			Imie: 'GGG',
			Nazwisko: 'MMM'
		})
		.then((result) => {
			res.status(201).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const kandydaci_delete = (req, res) => {
	console.log(req.params.id, "reques");
	// console.log();
	const id = req.params.id;
	Kandydaci.deleteOne({ _id: mongo.ObjectId(id) })
		.then((result) => {
			res.status(200 || 204).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

module.exports = {
	kandydaci_get_all,
	project_get_all,
	project_get_byID,
	kandydaci_create,
	kandydaci_delete,
};