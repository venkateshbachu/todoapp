ipl.mvc.view.view_base = Backbone.View.extend({
    initialize: function (options) {
        var _this = this;
        _this.options = options;

        if (!_.isUndefined(options)) {
            _this.setBinds(options);
        }

        this.renderTemplate(_this);

    }

    , renderTemplate: function (_this) {

        if (!_.isUndefined(_this.options.ID) && _.isUndefined(_this.options.template)) {
            _this.template = $.tmpl($(_this.options.ID).html(), _this.options);
            //_this.el.append(_this.template);           
            _this.options.el.append(_this.template);

            _.delay(function () {
                _this.trigger('templateLoaded');
                _this.hideAddressBar();
            }, 100);

        } else if (!_.isUndefined(_this.options.template) && _.isUndefined(_this.options.ID)) {
            $.get(_this.options.template, function (template) {
                var $template = $(template),
			    $body = $('body'),
			    tmplID = '#' + $template.attr('id');

                try {
                    localStorage.setItem(path, tmplID);
                } catch (e) { }

                var $foundTemplate = $body.find(tmplID);

                if (_.isUndefined($foundTemplate.get(0))) {
                    $body.append(template);
                    _this.template = template;
                } else {
                    _this.template = $foundTemplate.get(0);
                }

                _this.el.append($(_this.template).html());

                _.delay(function () {
                    _this.trigger('templateLoaded');
                    _this.hideAddressBar();
                }, 500);

            });
        }

    }
	, loadTemplate: function (path, callback) {
	    var _this = this;

	    $.get(path, function (template) {
	        var $template = $(template),
			$body = $('body'),
			tmplID = '#' + $template.attr('id');

	        try {
	            localStorage.setItem(path, tmplID);
	        } catch (e) { }

	        var $foundTemplate = $body.find(tmplID);

	        if (_.isUndefined($foundTemplate.get(0))) {
	            $body.append(template);
	            _this.trigger('templateLoaded');
	            _this.hideAddressBar();
	        }

	        if (!_.isUndefined(callback) && _.isFunction(callback)) {
	            callback();
	        };
	    });

	}
	, addOne: function (model) {
	    var _this = this;
	    var options = _.extend({
	        model: model
	    }, _this.options);
	    // We don't want to forward this option to the view:
	    //delete options.el;

	    var view = new _this.options.modelView(options);
	    this.el.append(view.render().el);
	}
	, addGroup: function (objectArray) {
	    var _this = this;
	    _.each(objectArray, function (model) {
	        _this.addOne(model);
	    });
	    this.trigger('modelsLoaded', true);
	}
	, addAll: function () {
	    this.collection.each(this.addOne);
	    this.trigger('modelsLoaded', true);
	    this.hideAddressBar();
	}
	, setBinds: function (options) {
	    if (!_.isUndefined(options.trigger) && _.isFunction(options.trigger)) {
	        options.trigger(this);
	    }
	}
	, pageLoading: function (hide) {
	    hide = hide || false;

	    if (hide) {
	        this.options.modelsLoading = false;
	        this.trigger('modelsLoaded');
	    } else {
	        this.options.modelsLoading = true;
	        this.trigger('pageLoading');
	    }
	}
	, dedupe: function () {
	    var idList = [];
	    var _this = this;

	    var removeList = _.select(_this.collection.models, function (model) {
	        if (!_.include(idList, model.id)) {
	            idList.push(model.id);
	            return false;
	        } else {
	            return true;
	        }
	    });
	    _.each(removeList, function (model) {
	        _this.removeOne(model);
	    });
	}
	, removeOne: function (model) {
	    if (_.isUndefined(model.view)) {
	        return false;
	    } else {
	        model.view.remove();
	    }
	}
	, removeAll: function () {
	    var $this = this;
	    if (_.isUndefined(this.collection)) {
	        return false;
	    } else {
	        this.collection.each($this.removeOne);
	        $(this.ul).empty();
	        return true;
	    }
	}
	, getjQueryObject: function ($el) {
	    return (typeof $el === 'object' && _.isUndefined($el.jquery)) ? $el = $(el) : $el;
	}
	, getDefaultValue: function ($el) {
	    return (!_.isUndefined($el.attr('defaultValue'))) ? $el.attr('defaultValue') : $el.get(0).defaultValue;
	}
	, isDefaultValue: function ($el) {
	    var defaultValue;

	    $el = this.getjQueryObject($el);
	    defaultValue = this.getDefaultValue($el);

	    return ($el.val() === defaultValue)
	}
	, fieldFocus: function (event) {
	    var $this = $(event.currentTarget);
	    if (this.isDefaultValue($this)) {
	        $this.val('');
	    }
	}
    , fieldBlur: function (event) {
        var $this = $(event.currentTarget);
        if ($this.val() === '') {
            $this.val(this.getDefaultValue($this));
        }
    }
    , validateEmail: function (elementValue) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }

    , hideAddressBar: function () {
        // Check that the current page can be scrolled first. Pad content if necessary.
        if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
            // Extend body height to overflow and cause scrolling
            bodyTag = document.getElementsByTagName('body')[0];
            bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px'; // Viewport height at fullscreen
        }

        // Big screen. Fixed chrome likely.
        if (screen.width > 980 || screen.height > 980) return;

        // Standalone (full screen webapp) mode
        if (window.navigator.standalone === true) return;

        // Page zoom or vertical scrollbars
        if (window.innerWidth !== document.documentElement.clientWidth) {
            // Sometimes one pixel too much. Compensate.
            if ((window.innerWidth - 1) !== document.documentElement.clientWidth) return;

        }

        setTimeout(function () {
            // Already scrolled?
            if (window.pageYOffset !== 0) return;

            // Perform autoscroll
            window.scrollTo(0, 1);

            // Reset body height and scroll
            if (bodyTag !== undefined) bodyTag.style.height = window.innerHeight + 'px';
            window.scrollTo(0, 0);

        }, 300);

    }

});