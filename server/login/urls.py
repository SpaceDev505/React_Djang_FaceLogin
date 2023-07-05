# from django.urls import path

# from . import views
# urlpatterns = [
#     path("", views.index, name = 'index')
# ]


from django.urls import path
# from . import views
from .views import SignInView
urlpatterns = [
    path('', SignInView.as_view(), name='signin')
]

# urlpatterns = [
#     path("", views.index, name = 'index')
# ]