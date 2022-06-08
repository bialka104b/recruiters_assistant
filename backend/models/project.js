const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KandydaciSchema = new Schema(
    {
        prj_name: { type: String },
        prj_stat: { type: String},
        prj_manager: { type: String },
        prj_cost: { type: Number },
        Imie: { type: String, required: true },
        Nazwisko: { type: String, required: true },
        // Email: { type: String, required: true },
        // Telefon: { type: Number, required: true },
        // Miejscowosc: { type: Number, required: true },
        // Angielski: { type: Number, required: true },
        // Niemiecki: { type: Number, required: true },
        // Pozostale_Jezyki: { type: Number, required: true },
        // Wiek: { type: Number, required: true },
        // Relokacja: { type: Number, required: true },
        // Doswiadczenie: { type: Number, required: true },
        // Wym_Finansowe: { type: Number, required: true },
        // Technologie: { type: Number, required: true },
        // Komentarze: { type: Number, required: true },
        // Specjalnosc: { type: Number, required: true },
        // Data_kontaktu: { type: Number, required: true },
        // Status_Zainteresowany: { type: Number, required: true },
        // Rozmowa_techniczna: { type: Number, required: true },
        // Rozmowa_nietechniczna: { type: Number, required: true },
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