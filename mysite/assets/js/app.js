ipl.initialize = function () {
    $(function () {

        ipl.mvc.router = new ipl.mvc.router();


        Backbone.history.start({
            pushState: false
        });
    });
};
