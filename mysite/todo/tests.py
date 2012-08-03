from django.test import TestCase
from mysite.todo.models import Todo


class TodoTest(TestCase):
    def test_add_todo(self):
        """
        Tests that todo is created sucessfully.
        """
        count = Todo.objects.all().count()
        todo = Todo(todo="create a todo app")
        todo.save()
        count1 = Todo.objects.all().count()
        self.assertNotEqual(count,count1)
