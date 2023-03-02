export class Person {
	_id: string;
	Angielski: string;
	Data_kontaktu: string;
	Doswiadczenie: string;
	Email: string;
	Firmy_Wspolpraca: string;
	Imie: string;
	Komentarze: string;
	Link_Do_Profilu: string;
	Miejscowosc: string;
	Nazwisko: string;
	Niemiecki: string;
	Pozostale_Jezyki: string;
	Relokacja: string;
	Rozmowa_nietechniczna: string;
	Rozmowa_techniczna: string;
	Specjalnosc: string;
	Status_Zainteresowany: Boolean;
	Technologie: string;
	Telefon: string;
	Wiek: string;
	Wym_Finansowe: string;
	constructor(
		_id: string = "",
		Imie: string = "",
		Nazwisko: string = "",
		Angielski: string = "",
		Niemiecki: string = "",
		Doswiadczenie: string = "",
		Email: string = "",
		Firmy_Wspolpraca: string = "",
		Komentarze: string = "",
		Link_Do_Profilu: string = "",
		Miejscowosc: string = "",
		Pozostale_Jezyki: string = "",
		Relokacja: string = "",
		Rozmowa_nietechniczna: string = "",
		Rozmowa_techniczna: string = "",
		Specjalnosc: string = "",
		Status_Zainteresowany: Boolean = false,
		Technologie: string = "",
		Telefon: string = "",
		Wym_Finansowe: string = "",
		Data_kontaktu: string = "",
		Wiek: string = "",
	) {
		this.Angielski = Angielski;
		this.Data_kontaktu = Data_kontaktu;
		this.Doswiadczenie = Doswiadczenie;
		this.Email = Email;
		this.Firmy_Wspolpraca = Firmy_Wspolpraca;
		this.Imie = Imie;
		this.Komentarze = Komentarze;
		this.Link_Do_Profilu = Link_Do_Profilu;
		this.Miejscowosc = Miejscowosc;
		this.Nazwisko = Nazwisko;
		this.Niemiecki = Niemiecki;
		this.Pozostale_Jezyki = Pozostale_Jezyki;
		this.Relokacja = Relokacja;
		this.Rozmowa_nietechniczna = Rozmowa_nietechniczna;
		this.Rozmowa_techniczna = Rozmowa_techniczna;
		this.Specjalnosc = Specjalnosc;
		this.Status_Zainteresowany = Status_Zainteresowany;
		this.Technologie = Technologie;
		this.Telefon = Telefon;
		this.Wiek = Wiek;
		this.Wym_Finansowe = Wym_Finansowe;
		this._id = _id;
	}
}
