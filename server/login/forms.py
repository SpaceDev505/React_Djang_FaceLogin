from .models import LoginModel
from django import forms

class TaskFrom(forms.ModelForm):
    class Meta:
        model = LoginModel
        fields = [
            'email',
            'password',
        ]