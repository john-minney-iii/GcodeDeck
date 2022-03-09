from django.urls import path, include
from .views import RegisterUser

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register-user'),
]
