		
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Veicolo = Backbone.Model.extend({
	idAttribute: "numeroRegistrazione",

	urlRoot: "/api/vehicles",

	
	validate: function(attrs) {
		if(attrs.numeroRegistrazione === null || attrs.numeroRegistrazione === undefined){
			return "Il numero di Registrazione deve essere valorizzato";
		}
	},

	start: function() {
		console.log("L'auto con numero di registrazione " + this.numeroRegistrazione + " è partita.");
	}

});



