from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated

class ToolChange(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class SpindleCommand(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class RapidMovement(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class LinearMovement(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            feed_rate = request.data['feedrate']
            axis = request.data['axis']
            pos = request.data['pos']
            pos2 = request.data['pos2']
            print(f'Axis: {axis}, F: {feed_rate}, Pos: {pos}, Pos2: {pos2}')
            return Response(
                'Answer goes here',
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class Drilling(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class FacingTemplate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class RectangleTemplate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            pass
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )
