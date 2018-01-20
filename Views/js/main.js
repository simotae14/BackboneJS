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