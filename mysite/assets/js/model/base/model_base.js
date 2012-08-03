ipl.mvc.model.base = Backbone.Model.extend({
	
});

Backbone._sync = Backbone.sync;
Backbone.sync = function(method, model, options) {
	var params = _.clone(options);
    if (model.attributes){
    	delete model.attributes.id;
    }
	Backbone._sync(method, model, params);
}
