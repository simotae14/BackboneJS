
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/**************************************
MODEL
**************************************/
/*
var Song = Backbone.Model.extend({
	initialize: function(){
		console.log("Creata una nuova canzone.");
	}
});

var song = new Song();
*/
/**************************************
ATTRIBUTI DEI MODEL
**************************************/
/*
var Song = Backbone.Model.extend({
	defaults: {
		genere: "Jazz"
	}
});

var song = new Song({
	titolo: "Blue in Green",
	artista: "Miles Davis",
	annoPubblicazione: 1959	
});
*/
/**************************************
VALIDAZIONE DEI MODEL
**************************************/
var Song = Backbone.Model.extend({
	validate: function(attrs){
		if(!attrs.titolo) 
			return "Il Titolo è richiesto";
	}
});

var song = new Song();

console.log(song.isValid());

console.log(song.validationError);