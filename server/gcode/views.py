from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

class ToolChange(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class SpindleCommand(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class RapidMovement(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class LinearMovement(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class Drilling(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class FacingTemplate(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class RectangleTemplate(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )
