function Telefon(marka, cena, kolor, przekatna) {
	this.marka = marka; 
	//dzięki użyciu this, właściwość "marka" obiektu, który stworzymy, przyjmie wartość argumentu marka
	this.cena = cena;
	this.kolor = kolor;
    this.przekatna = przekatna;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

Telefon.prototype.compare = function(model) {
    if (this.przekatna > model.przekatna) {
        console.log(this.marka + " ma większą przekątną ekranu " + model.marka + " o " + (this.przekatna - model.przekatna) + ' cali/-a.');
    } else {
        console.log(this.marka + " ma mniejszą przekątną ekranu " + model.marka + " o " + (model.przekatna - this.przekatna) + ' cali/-a.');
    }
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny", 4.7);
var SamsungGalaxyS6 = new Telefon("Samsung", 1200, "czarny", 5.5);
var OnePlusOne = new Telefon("OnePlus", 2300, "biały", 5.0);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

SamsungGalaxyS6.compare(OnePlusOne);