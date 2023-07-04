from .models import Task
from django import forms

class TaskFrom(forms.ModelForm):
    class Meta:
        model = Task
        fields = '__all__'