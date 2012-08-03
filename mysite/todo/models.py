from django.db import models


class Todo(models.Model):
    todo = models.CharField(max_length=100)
    date = models.DateField(auto_now=True)

    class Meta:     
        ordering = ['id']

    def save(self,*args,**kwargs):
        super(Todo,self).save(*args,**kwargs)
        
