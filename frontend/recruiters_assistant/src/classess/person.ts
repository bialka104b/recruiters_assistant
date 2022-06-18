export class Person {
	Angielski: String;
	Data_kontaktu: String;
	Doswiadczenie: String;
	Email:  String;
	Firmy_Wspolpraca:  String;
	Imie: String;
	Komentarze:  String;
	Link_Do_Profilu: String;
	Miejscowosc: String;
	Nazwisko: String;
	Niemiecki:  String;
	Pozostale_Jezyki:  String;
	Relokacja:  String;
	Rozmowa_nietechniczna:  String;
	Rozmowa_techniczna:  String;
	Specjalnosc:  String;
	Status_Zainteresowany: Boolean
	Technologie: String;
	Telefon: String;
	Wiek:  String;
	Wym_Finansowe:  String;
	_id: String;

	constructor(
		_id: String = '',
		Imie: String = '',
		Nazwisko: String = '',
		Angielski: String = '',
		Niemiecki:  String = '',
		Doswiadczenie: String = '',
		Email:  String = '',
		Firmy_Wspolpraca:  String = '',
		Komentarze:  String = '',
		Link_Do_Profilu: String = '',
		Miejscowosc: String = '',
		Pozostale_Jezyki:  String = '',
		Relokacja:  String = '',
		Rozmowa_nietechniczna:  String = '',
		Rozmowa_techniczna:  String = '',
		Specjalnosc:  String = '',
		Status_Zainteresowany: Boolean = false,
		Technologie: String = '',
		Telefon: String = '',
		Wym_Finansowe:  String = '',
		Data_kontaktu: String = '',
		Wiek:  String = '',
	) { 
		this.Angielski = Angielski,
		this.Data_kontaktu = Data_kontaktu,
		this.Doswiadczenie = Doswiadczenie,
		this.Email = Email,
		this.Firmy_Wspolpraca = Firmy_Wspolpraca,
		this.Imie= Imie,
		this.Komentarze = Komentarze,
		this.Link_Do_Profilu =Link_Do_Profilu,
		this.Miejscowosc =Miejscowosc,
		this.Nazwisko =Nazwisko,
		this.Niemiecki = Niemiecki,
		this.Pozostale_Jezyki = Pozostale_Jezyki,
		this.Relokacja = Relokacja,
		this.Rozmowa_nietechniczna = Rozmowa_nietechniczna,
		this.Rozmowa_techniczna = Rozmowa_techniczna,
		this.Specjalnosc = Specjalnosc,
		this.Status_Zainteresowany = Status_Zainteresowany,
		this.Technologie =Technologie,
		this.Telefon =Telefon,
		this.Wiek = Wiek,
		this.Wym_Finansowe = Wym_Finansowe,
		this._id = _id
	}
}