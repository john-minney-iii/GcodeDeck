from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated

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
