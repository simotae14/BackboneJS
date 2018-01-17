
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/**************************************
COLLECTION
**************************************/

var Song = Backbone.Model.extend();

// DEFINISCO LA COLLECTION
var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs([
	new Song({ title: "Song 1" }),
	new Song({ title: "Song 2" }),
	new Song({ title: "Song 3" })
]);

// creo una istanza di Model dentro la collection
songs.add(new Song({ title: "Song 4" }));