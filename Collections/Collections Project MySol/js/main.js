		
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
var Veicolo = Backbone.Model.extend({
	idAttribute: "numeroRegistrazione",

	urlRoot: "/api/vehicles",

	
	validate: function(attrs) {
		if(attrs.numeroRegistrazione){
			return "Il numero di Registrazione deve essere valorizzato";
		}
	},

	start: function() {
		console.log("Veicolo inizializzato.");
	}

});

var Veicoli = Backbone.Collection.extend({
	model: Veicolo
})

var Auto = Veicolo.extend({
	start: function() {
		console.log("L'auto con numero di registrazione " + this.get("numeroRegistrazione") + " è partita.");
	}
}); 

// creo le tre car
var car1 = new Auto({ numeroRegistrazione: "XLI887", colore: 'Blue' });
var car2 = new Auto({ numeroRegistrazione: "ZNP123", colore: 'Blue' });
var car3 = new Auto({ numeroRegistrazione: "XUV456", colore: 'Gray' });

var veicoli = new Veicoli([car1, car2, car3]);

var autoBlu = veicoli.where({ colore: "Blue" });

console.log("Auto blu", autoBlu);

var autoXLI = veicoli.findWhere({
	numeroRegistrazione: "XLI887"
});

console.log("Auto con numero di Registrazione XLI887", autoXLI);

veicoli.remove(autoXLI);

var veicoliJson = veicoli.toJSON();

console.log("Veicoli come JSON", veicoliJson);

veicoli.each(function(veicolo){
	console.log(veicolo);
});

