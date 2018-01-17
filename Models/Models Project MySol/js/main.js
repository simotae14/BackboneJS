		
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


var Auto = Veicolo.extend({
	start: function() {
		console.log("L'auto con numero di registrazione " + this.get("numeroRegistrazione") + " è partita.");
	}
});


var newAuto = new Auto({
	numeroRegistrazione: 'XLI887',
	colore: "Blue"
});

// cancellare valore del numeroRegistrazione dall'istanza Auto
newAuto.unset("numeroRegistrazione");

// controllo se è valido
if(!newAuto.isValid()){
	console.log(newAuto.validationError);
}

newAuto.set("numeroRegistrazione", "XLI887");

if(!newAuto.isValid()){
	console.log(newAuto.validationError);
}

newAuto.start();