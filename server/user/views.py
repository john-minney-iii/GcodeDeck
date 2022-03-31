from django.forms import PasswordInput
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

class RegisterUser(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid(raise_exception=ValueError):
                serializer.create(validated_data=request.data)
                return Response(
                    serializer.data,
                    status=status.HTTP_201_CREATED
                )
            return Response(
                {'error': True, 'error_msg': serializer.error_messages},
                status=status.HTTP_400_BAD_REQUEST
            )    
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class CheckToken(APIView):
    permissions_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.get(username=request.data['username'])
            token = Token.objects.get(user=user)
            if (token.key == request.data['token']):
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class ChangePassword(APIView):
    permissions_classes = [IsAuthenticated]

    def post(self, request):
        user = User.objects.get(username=request.data['username'])
        username = request.data['username']
        current_pass = request.data['currentPassword']
        new_pass = request.data['newPassword']
        user_auth = authenticate(username = username, password=current_pass)
        if user_auth is not None:
            user.set_password(new_pass)
            user.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_BAD_REQUEST)

class DeleteUser(APIView):
    permissions_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user = User.objects.get(username=request.data['username'])
            token = Token.objects.get(user=user)
            if (token.key == request.data['token']):
                user_auth = authenticate(username=request.data['username'], password=request.data['password'])
                if user_auth is not None:
                    user.delete()
                    return Response(
                        'User deleted',
                        status=status.HTTP_200_OK
                    )
            return Response(
                {'error': True, 'error_msg': 'Error deleting user'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )
