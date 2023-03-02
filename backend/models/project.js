const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KandydaciSchema = new Schema(
	{
		Imie: { type: String},
		Nazwisko: { type: String, required: true },
		Relokacja: { type: String },
		Email: { type: String },
		Telefon: { type: String},
		Miejscowosc: { type: String },
		Angielski: { type: String },
		Niemiecki: { type: String },
		Pozostale_Jezyki: { type: String},
		Wiek: { type: String},
		Doswiadczenie: { type: String },
		Wym_Finansowe: { type: String },
		Widelki: { type: String },
		Link_Do_Profilu: { type: String },
		Firmy_Wspolpraca: { type: String },
		Technologie: { type: String },
		Komentarze: { type: String },
		Specjalnosc: { type: String },
		Data_kontaktu: { type: String },
		Status_Zainteresowany: { type: String },
		Rozmowa_techniczna: { type: String },
		Rozmowa_nietechniczna: { type: String },
	},
	{
		timestamps: true,
		collection: "kandydaci", //tu można podawac nazwe kolekcji z której chcemy pobrać dane
	},
);


const ProjectSchema = new Schema(
	{
		prj_name: { type: String, required: true },
		prj_stat: { type: String, required: true },
		prj_manager: { type: String, required: true },
		prj_cost: { type: Number, required: true },
		//tu nie mozna deklarować schema bo nam wytnie niektóre pola
	},
	{
		timestamps: true,
		collection: "kandydaci", //tu można podawac nazwe kolekcji z której chcemy pobrać dane
	},
);

const Kandydaci = mongoose.model("Kandydaci", KandydaciSchema);
const Project = mongoose.model("Project", ProjectSchema);

module.exports = {
	Project,
	Kandydaci,
};
