		
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
var Veicolo = Backbone.Model.extend({
	idAttribute: "numeroRegistrazione",
	
	urlRoot: "/api/vehicles",

	validate: function(attrs) {
		if(!attrs.numeroRegistrazione){
			return "Il numero di Registrazione deve essere valorizzato";
		}
	},

	start: function() {
		console.log("Veicolo inizializzato.");
	}

});

var Veicoli = Backbone.Collection.extend({
	model: Veicolo
});

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


var VeicoloView = Backbone.View.extend({
	tagName: "li",
	className: "veicolo",
	render: function() {
		var template = _.template($('#veicoloTemplate').html());
		// gli passo il model in json
		//var html = template(this.model.toJSON());
		// lo attacco al container
		//this.$el.html(html);
     	// aggiungo attributo
     	//this.$el.attr("data-color", this.model.get("colore"));

		return this;
	}
});

var VeicoliView = Backbone.View.extend({
	tagName: "ul",
	render: function() {
		this.model.each(function(veicolo){
            var veicoloView = new VeicoloView({model: veicolo});
            this.$el.append(veicoloView.render().$el);
        }, this);

        return this;
	}
});

var veicoliView = new VeicoliView({ el:"#container", model: veicoli });
veicoliView.render();


