/*****************************
VIEW: CREARE CONTENUTO STATICO
*****************************/
/*
var SongView = Backbone.View.extend({
	tagName: "span",
	class: "song",
	id: "1234",
	attributes: {
		"data-genre": "Jazz"
	},
	render: function(){
		this.$el.html("Hello World");
		return this;
	}
});

// istanza view
var songView = new SongView();

$('#container').html(songView.render().$el);
*/

/*****************************
VIEW: PASSARE DEI VALORI : MODEL
*****************************/
/*
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
	render: function(){
		this.$el.html(this.model.get("title"));
		return this;
	}
});

// CREO ISTANZA DI UN MODEL
var song = new Song({ title: "Blue in Green" })

// istanza view
var songView = new SongView({el: "#container", model: song});

songView.render();
*/
/*****************************
VIEW: PASSARE DEI VALORI : COLLECTION
*****************************/
/*
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongView = Backbone.View.extend({
	tagName: "li",
	render: function(){
		this.$el.html(this.model.get("title"));
		return this;
	}
});

// View Per la Collection
var SongsView = Backbone.View.extend({
	
	render: function(){
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({model: song});
			self.$el.append(songView.render().$el);
		});
	}
});

// CREO ISTANZA DI UNA COLLECTION
var songs = new Songs([
	new Song({title: "Blue in Green"}),
	new Song({title: "So What"}),
	new Song({title: "All blues"})
]);


var songsView = new SongsView({ model: songs, el: '#songs' });
songsView.render();
*/
/*****************************
VIEW: HANDLING DOM EVENTS
*****************************/
/*
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
	events: {
		"click": "onClick",
		"click .bookmark": "onClickBookmark"
	},
	onClick: function(){
		console.log("Listen clicked");
	},
	onClickBookmark: function(e){
		e.stopPropagation();
		console.log("Bookmark clicked");
	},
	render: function(){
		this.$el.html(this.model.get("title") + "<button>Listen</button> <button class='bookmark'>Bookmark</button>");
		return this;
	}
});

// CREO ISTANZA DI UN MODEL
var song = new Song({ title: "Blue in Green" })

// istanza view
var songView = new SongView({el: "#container", model: song});

songView.render();
*/
/*****************************
VIEW: GESTIRE CAMBIAMENTI MODEL
*****************************/
var Song = Backbone.Model.extend({
	defaults: {
		ascolti: 0
	}
});

var SongView = Backbone.View.extend({
	initialize: function(){
		this.model.on("change", this.render, this);
	},
	render: function(){
		this.$el.html(this.model.get("title") + " - Ascoltatori: " + this.model.get("ascolti"));
		return this;
	}
});

// CREO ISTANZA DI UN MODEL
var song = new Song({ title: "Blue in Green" })

// istanza view
var songView = new SongView({el: "#container", model: song});

songView.render();
