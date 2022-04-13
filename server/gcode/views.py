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
            safeStart = "G54 G17 G90 G20"
            if axis == "X":
                g01 = f'G01 X{pos} F{feed_rate}'
            elif axis == "Y":
                g01 = f'G01 Y{pos} F{feed_rate}'
            elif axis == "Z":
                g01 = f'G01 Y{pos} F{feed_rate}'
            elif axis == "XY":
                g01 =f'G01 X{pos} Y{pos2} F{feed_rate}'
            print(safeStart, g01)
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
