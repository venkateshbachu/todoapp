ipl.mvc.view.message_view = ipl.mvc.view.view_base.extend({
	el: $('#notice')
	//className : "success",
	,displayLength : 5000,
	defaultMessage : '',
	initialize : function() {
		var _this = this;
		_.bindAll(this, 'render');
		_this.message = this.options.message || _this.defaultMessage;
		_this.render();
	},
	render : function() {
		var _this = this;
		$('#notice').slideDown();
		$('#notice').html(_this.message);
	$.doTimeout(_this.displayLength, function() {
			$("#notice").slideUp();
	});
		return _this;
	}
});