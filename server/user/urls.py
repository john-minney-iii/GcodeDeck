from django.urls import path, include
from .views import RegisterUser
from rest_framework.authtoken import views

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register-user'),
    path('auth/', views.obtain_auth_token, name='api-token-auth'),
]
