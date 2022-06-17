const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KandydaciSchema = new Schema(
	{
		Imie: { type: String, required: true },
		Nazwisko: { type: String, required: true },
		Relokacja: { type: String, required: true },
		Email: { type: String, required: true },
		Telefon: { type: String, required: true },
		Miejscowosc: { type: String, required: true },
		Angielski: { type: String, required: true },
		Niemiecki: { type: String, required: true },
		Pozostale_Jezyki: { type: String, required: true },
		Wiek: { type: String, required: true },
		// Doswiadczenie: { type: String, required: true },
		// Wym_Finansowe: { type: String, required: true },
		// Technologie: { type: String, required: true },
		// Komentarze: { type: String, required: true },
		// Specjalnosc: { type: String, required: true },
		// Data_kontaktu: { type: String, required: true },
		// Status_Zainteresowany: { type: String, required: true },
		// Rozmowa_techniczna: { type: String, required: true },
		// Rozmowa_nietechniczna: { type: String, required: true },
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
		collection: "projects", //tu można podawac nazwe kolekcji z której chcemy pobrać dane
	},
);


const Kandydaci = mongoose.model("Kandydaci", KandydaciSchema);
const Project = mongoose.model("Project", ProjectSchema);

module.exports = {
    Project,
    Kandydaci
};