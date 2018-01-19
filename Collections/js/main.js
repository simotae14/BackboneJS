
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/**************************************
COLLECTION
**************************************/
/*
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
*/
/**************************************
COLLECTION
**************************************/

var Song = Backbone.Model.extend();

// DEFINISCO LA COLLECTION
var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs();

// creo una istanza di Model dentro la collection
songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110 }), { at: 0 });

// PUSH
songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));

// RECUPERARE DATI DALLA COLLECTION
// restituisce array delle corrispondenze
var jazzSongs = songs.where({ genre: "Jazz" });


// restituisce la prima corrispondenza
var firstJazzSongs = songs.findWhere({ genre: "Jazz" });

console.log("Jazz Songs", jazzSongs);

console.log("First Jazz Song", firstJazzSongs);

var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered Songs", filteredSongs);

var topDowloads = songs.filter(function(song){
	return song.get("downloads") > 100;
});

console.log("topDowloads", topDowloads);

songs.each(function(song){
	console.log(song);
});

