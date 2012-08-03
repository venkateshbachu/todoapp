$(function () {
    ipl.mvc.view.add_todo_view = ipl.mvc.view.view_base.extend({
    	ID : '#tmpl_todo'
    	,events: {
            'keypress #todo': 'save'
          ,'click .delete' : 'delete'
        		  , 'click .post a': 'show'
    	}
		, initialize: function () {
		    var _this = this;
		    _.bindAll(this, 'addOne', 'addAll', 'render','save','delete','show');
		    _this.loadTemplate('/assets/t/plmt/todo.tmpl.html', function () {
		        _this.template = $.template($('#tmpl_todo').html());
		        _this.bind('change', _this.render, _this);
		        _this.bind('reset', _this.render, _this)
		        _this.render();
		    });
		}

		, render: function () {
		    var _this = this;
		    var view = new ipl.mvc.view.todo_details_view({el:_this.el});
		    var $el = $(_this.el);
		    $el.html($.tmpl(_this.template));
		    return _this;
		}
		
		,save:function(e){
			if (e.keyCode != 13) return
		var _this = this;
		  _this.model = new ipl.mvc.model.todo_model([]);
		  _this.model.save({ 
		  	todo: _this.$('#todo').val(),
		  }, 
		  {
            	success: function(model, resp) {
                _this.model = model;
                _this.render();
                _this.delegateEvents();
                ipl.mvc.view.message = new ipl.mvc.view.message_view({
    	            //el: _this.el,
    	            message:"Saved Successfully"
    	        });
            },
            error: function(resp) {
            alert(resp);
            }
        });
		}		
    
		,delete: function (e) {
	        var clickedEl = $(e.currentTarget);
	        var id = clickedEl.attr("id");
	        var _this = this;
	        _this.model = new ipl.mvc.model.todo_model({id:id});
	        _this.model.destroy({
	            success:function () {
	                _this.render()
	                ipl.mvc.view.message = new ipl.mvc.view.message_view({
	    	            el: _this.el,
	    	            message:"Deleted Successfully"
	    	        });
	            }
	        });
	        return true;
	    }

		, show: function() {
			if($('.contacts').is(':visible')) {
				$('.contacts').slideUp(200, function() {
					//$('.contacts').hide();
				});
			} else {
				$('.contacts').slideDown(200, function() {
					//$('.number').fadeIn();
				});
			}
			return false;
		}

    });
});
