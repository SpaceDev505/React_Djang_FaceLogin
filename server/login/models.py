from django.db import models

# Create your models here.
class LoginModel(models.Model):
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    fields = [
        'email',
        'password',
    ]