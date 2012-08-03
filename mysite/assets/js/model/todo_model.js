ipl.mvc.model.todo_model = ipl.mvc.model.base.extend({
	options:0,
	url: function () {
    	var _this = this;
    	var base = '/api/todo/';
        if (_this.options.id) return base + _this.options.id;
        return base;
      }

, initialize: function (options) {
		var _this = this;
		_this.options = options;
		_this.fetch();
	}
});	

Backbone.__sync = Backbone._sync;
Backbone._sync = function(method, model, options) {
    delete model.attributes.date;
    Backbone.__sync(method, model,options);
}