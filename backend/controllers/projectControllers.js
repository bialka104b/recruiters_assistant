const { Project, Kandydaci } = require("../models/project"); //to są ścieżki na stronie www
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

const project_get_byID = (req, res) => {
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
	const myRegexC = new RegExp(/\bc(?= )|c(?=,)|c(?=\/)\b/);
	const myRegexJava = new RegExp(/\bjava(?= )|java(?=,)\b/)
	const regexC = req.query.c != "" ? myRegexC : "";
	const regexJava = req.query.java != "" ? myRegexJava : "";
	Kandydaci.find({
		$and: [
			{
				Nazwisko: { $regex: req.query.surname, $options: "i" },
			},
			{
				Miejscowosc: { $regex: req.query.locality, $options: "i" },
			},
			{
				Specjalnosc: { $regex: req.query.specjalization, $options: "i" },
			},
			{
				$or: [
					{
						Angielski: { $regex: req.query.angielskia2, $options: "i" },
					},
					{
						Angielski: { $regex: req.query.angielskib1, $options: "i" },
					},
					{
						Angielski: { $regex: req.query.angielskib2, $options: "i" },
					},
					{
						Angielski: { $regex: req.query.angielskic1, $options: "i" },
					},
					{
						Angielski: { $regex: req.query.angielskic2, $options: "i" },
					},
				],
			},
			{
				Angielski: { $regex: req.query.angielski, $options: "i" },
			},
			{
				$or: [
					{
						Niemiecki: { $regex: req.query.niemieckia2, $options: "i" },
					},
					{
						Niemiecki: { $regex: req.query.niemieckib1, $options: "i" },
					},
					{
						Niemiecki: { $regex: req.query.niemieckib2, $options: "i" },
					},
					{
						Niemiecki: { $regex: req.query.niemieckic1, $options: "i" },
					},
					{
						Niemiecki: { $regex: req.query.niemieckic2, $options: "i" },
					},
				],
			},
			{
				Niemiecki: { $regex: req.query.niemiecki, $options: "i" },
			},
			{
				Pozostale_Jezyki: { $regex: req.query.pozostaleJezyki, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.adobe, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.agile, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.android, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.angular, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.aws, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.bash, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.bootstrap, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.css, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.csharp, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.cpp, $options: "i" },
			},
			{
				Technologie: { $regex: regexC, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.delphi, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.html, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.ios, $options: "i" },
			},
			{
				Technologie: { $regex: regexJava, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.javascript, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.jQuery, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.kanban, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.less, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.linux, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.dotNet, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.node, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.oracle, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.perl, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.photoshop, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.php, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.powershell, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.python, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.powershell, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.react, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.ruby, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.sass, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.scala, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.scrum, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.spring, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.sql, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.scss, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.swift, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.vue, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.vb, $options: "i" },
			},
			{
				Technologie: { $regex: req.query.windows, $options: "i" },
			},
		],
	})
		.where({ Miejscowosc: { $regex: "", $options: "i" } })
		// .sort({ createdAt: 1 })
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(400).send(`There is an error in the server while loading projects`);
		});
};

const kandydaci_create = (req, res) => {
	Kandydaci.create(req.body)
		.then((result) => {
			res.status(201).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const kandydaci_createMany = (req, res) => {
	Kandydaci.insertMany(req.body)
		.then((result) => {
			res.status(200 || 204).send(result);
			console.log(result, "wszystko ok insertMany");
		})
		.catch((err) => {
			res.status(400).send(err);
			console.log(err, "eroor insertMany");
		});
};

const kandydaci_delete = (req, res) => {
	const id = req.params.id;
	Kandydaci.deleteOne({ _id: mongo.ObjectId(id) })
		.then((result) => {
			res.status(200 || 204).send(result);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const kandydaci_update = (req, res) => {
	const id = req.params.id;
	Kandydaci.updateOne({ _id: mongo.ObjectId(id) }, { $set: req.body })
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
	kandydaci_update,
	kandydaci_createMany,
};
