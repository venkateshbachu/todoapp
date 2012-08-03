from djangorestframework.resources import ModelResource
from mysite.todo.models import Todo
from django.conf.urls.defaults import patterns, url
from djangorestframework.views import ListOrCreateModelView, InstanceModelView

class TodoResource(ModelResource):
    model = Todo
    fields = ("id","todo","date")


apipatterns = patterns('',
    url(r'^api/todo/$', ListOrCreateModelView.as_view(resource=TodoResource)),
    url(r'^api/todo/(?P<pk>[^/]+)', InstanceModelView.as_view(resource=TodoResource)),
)