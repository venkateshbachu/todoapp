$(function () {
    ipl.mvc.router = Backbone.Router.extend({
        el: $('#contentArea')
        , selectedNavModel: null
		, routes: {
            '!/todos/:id': 'edit_todo'
            , '!/todos': 'todo'
		}

		, initialize: function (options) {
		    var _this = this;

		    _.delay(function () {
		        window.scrollTo(0, 1);
		    }, 100);

		    _this.setupLoader();
		}

        , setupLoader: function () {
            _this = this;
            $.blockUI.defaults.message = '<div class="loaderContainer" style="text-align: center"><span class="loaderText"><img src="/assets/img/ajax-loader.gif" /><br/>Loading</span></div>';
            $.blockUI.defaults.css = {
                border: 'none',
                padding: '15px',
                position: 'absolute',
                width: 100,
                top: window.pageYOffset + ($(window).height() / 2) - 50 - 10,
                left: ($(window).width() / 2) - 50 - 10,
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
            $('body').ajaxStart(function () {
                //console.log('AjaxStart...adjusting loader size and postion');
                $.blockUI();
                _.delay(function () {
                    window.scrollTo(0, 1);
                }, 100);
                return true;
            }).ajaxStop(function () {
                $.unblockUI();
                //console.log('AjaxFinish');
                return true;
            });

        }

        , todo: function () {
            var _this = this;
            _this.cleanUp();
            ipl.mvc.view.todo = new ipl.mvc.view.add_todo_view({
                el: _this.el
            });
        }

        ,edit_todo: function (id) {
        var _this = this;
        _this.cleanUp();
        _this.model = new ipl.mvc.model.todo_model({id:id});
        _this.model.fetch({
            success: function(model, resp) {
                new ipl.mvc.view.edit_todo_view({ el:_this.el,
                	model: model });
            },
            error: function(model,resp) {
                alert(JSON.stringify(resp));
                }
        });
    }

        // Utility:
		, cleanUp: function () {
		    this.el.unbind();
		    this.el.empty();
		    this.el.show();
		    this.el.removeClass();


		    _.delay(function () {
		        window.scrollTo(0, 1);
		    }, 100);
		}

    });

});