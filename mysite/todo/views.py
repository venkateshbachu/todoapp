# Create your views here.
from django.shortcuts import render_to_response
from django.template.context import RequestContext

def todo_view(request):
    return render_to_response("todo/todo.html",
                   {'view': 'Todo Home Page'},
                   context_instance=RequestContext(request))