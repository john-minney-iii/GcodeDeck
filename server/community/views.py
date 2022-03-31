from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import ContactRequest, SystemRequest

class CreateContactReqest(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            contact_request = ContactRequest(
                author=request.data['username'],
                email=request.data['email'],
                content=request.data['content']
            )
            contact_request.save()
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class CreateSystemRequest(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            contact_request = SystemRequest(
                author=request.data['username'],
                email=request.data['email'],
                content=request.data['content']
            )
            contact_request.save()
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )
