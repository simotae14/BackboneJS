
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/**************************************
MODEL
**************************************/
var Song = Backbone.Model.extend({
	initialize: function(){
		console.log("Creata una nuova canzone.");
	}
});

var song = new Song();