from django.urls import path
from .views import RegisterUser, DeleteUser
from rest_framework.authtoken import views

urlpatterns = [
    path('register/', RegisterUser.as_view(), name='register-user'),
    path('delete/', DeleteUser.as_view(), name='delete-user'),
    path('auth/', views.obtain_auth_token, name='api-token-auth'),
]
