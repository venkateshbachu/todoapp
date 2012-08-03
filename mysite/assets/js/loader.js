    $LAB
    // common-lib:
		.script('/assets/js/namespace.js')
		.script('/assets/js/lib/json2.js')
		.script('/assets/js/lib/jquery-1.7.min.js')
			.wait()
		.script('/assets/js/lib/jquery.tmpl-1.0.0-beta.min.js')
		.script('/assets/js/lib/jquery.blockUI-2.37.min.js')

		.script('/assets/js/lib/jquery.ba-serializeobject.min.js')
		.script('/assets/js/lib/jquery.cfjs-1.1.12.js')
		.script('/assets/js/lib/jquery.ba-dotimeout.min.js')
		.script('/assets/js/lib/jquery.customalert.js')
        .script('/assets/js/lib/jquery.validate.min.js')
        .script('/assets/js/lib/ipl.jquery.validation.methods.js')
		.script('/assets/js/lib/jquery.rotate.min.2.1.js')
		.script('/assets/js/lib/jquery.flexslider-min.js')
		.script('/assets/js/lib/iscroll.js')
		.script('/assets/js/lib/retina.js')
		.script('/assets/js/lib/jquery.retina.js')
        .script('/assets/js/lib/underscore-1.1.7.min.js')
			.wait()
		.script('/assets/js/lib/underscore.string-1.1.5.min.js')
		.script('/assets/js/lib/backbone-0.5.3.min.js')
			.wait()

    // Base Files:
    	.script('/assets/js/model/base/model_base.js')
		.script('/assets/js/view/base/view_base.js')
			.wait()

    // Models
		.script('/assets/js/model/todo_model.js')

    // Views
		.script('/assets/js/view/add_todo_view.js')
		.script('/assets/js/view/edit_todo_view.js')
		.script('/assets/js/view/todo_details_view.js')
        .script('/assets/js/view/message_view.js')

    // Router
		.script('/assets/js/router/router.js')
            .wait()

		.script('/assets/js/app.js')
		    .wait(function () {
		            ipl.initialize();
		    });