const { Project , Kandydaci} = require("../models/project");  //to są ścieżki na stronie www

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

module.exports = {
	kandydaci_get_all,
	project_get_all,
	project_get_byID,
};