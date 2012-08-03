$(function () {
    ipl.mvc.view.todo_details_view = ipl.mvc.view.view_base.extend({
        template: '/assets/t/plmt/todo.tmpl.html'
        , ID: '#tmpl_openings'

	
        , initialize: function () {
            var _this = this;
            _.bindAll(this, 'addOne', 'addAll', 'render');
            _this.loadTemplate(_this.template, function () {
                _this.model = new ipl.mvc.model.todo_model([]);
                _this.model.view = _this;
                _this.model.bind('change', _this.render, _this);

            });
        }

		, render: function () {
		    var _this = this
		    	jsonData = _this.model.toJSON();
		    _.each(jsonData,function(model){ 
		    $(_this.ID).tmpl(model).appendTo(_this.el);
		   return _this;
		 });
		} 
		

    });
});