$(function () {
    ipl.mvc.view.edit_todo_view = ipl.mvc.view.view_base.extend({
        ID :'#tmpl_todo',
        events: {
            'keypress #todo': 'save'
            , 'click .post a': 'show'
        }
  , initialize: function (options) {
      var _this = this;
      _this.options = options;
      _this.id = _this.options.id
      _.bindAll(this, 'addOne', 'addAll', 'render','save','show');
      _this.loadTemplate('/assets/t/plmt/todo.tmpl.html', function () {
	  _this.bind("change",_this.render,_this)
	  _this.render();
	  _this.show();
      });
  }
  , render:function (eventName) {
	  var _this = this;
	  jsonData =_this.options.model.toJSON();
        $(_this.ID).tmpl(jsonData).appendTo(_this.options.el);
        return _this;
    
  }
    
 ,save:function(e){
	 if (e.keyCode != 13) return
  var _this = this;
  	_this.options.model.save({ 
  		todo: _this.$('#todo').val(),
	  }, 
	  {
        	success: function(model, resp) {
            _this.model = model;
            _this.delegateEvents();
            ipl.mvc.view.message = new ipl.mvc.view.message_view({
	            //el: _this.el,
	            message:"Saved"
	        });
        },
        error: function(resp) {
        alert(resp);
        }
    });
	}		

        , show: function() {
    	$(".post").css("display","none");
		if($('.contacts').is(':visible')) {
			$('.contacts').slideUp(200, function() {
				//$('.contacts').hide();
			});
		} else {
			$('.contacts').slideDown(200, function() {
				//$('.number').fadeIn();
			});
		}
		return true;
	}

    });
    });