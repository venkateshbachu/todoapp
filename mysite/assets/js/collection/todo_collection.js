ipl.mvc.collection.todo_collection = ipl.mvc.collection.collection_base.extend({
    model: ipl.mvc.model.todo_model
,options :0
    , url: function () {
    	    return '/api/todo';
    	}

    	, initialize: function (options) {
    	    var _this = this;
    	    _this.options = options;
    	    _this.fetch();
    	    return _this;
    	}
    });
