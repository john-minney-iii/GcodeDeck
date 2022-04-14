from json import tool
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated


class ToolChange(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            tool_number = request.data['toolNumber']
            cutter_compensation = request.data['cutterCompensation']
            notes = request.data['notes']
            safeStart = "G54 G90 G17 G20; (Safe Start)"
            toolChange = f'M06 T{tool_number} ; (Load Tool #{tool_number} Notes: {notes})'
            toolOffset = f'G43 H{tool_number} ; (Load Positive Tool Height Offset for tool {tool_number})'
            if cutter_compensation != "None":
                cutterComp = f'{cutter_compensation} D{tool_number}'
            return Response(
                f'{safeStart},{toolChange},{toolOffset},{cutterComp}',
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )


class SpindleCommand(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            direction_of_rotation = request.data['directionOfRotation']
            spindleRpm = request.data['spindleRpm']
            turnOnSpindle = f'{direction_of_rotation} S{spindleRpm}'
            return Response(
                turnOnSpindle,
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(

                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )


class RapidMovement(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            feed_rate = request.data['feedrate']
            axis = request.data['axis']
            pos = request.data['pos']
            pos2 = request.data['pos2']
            if axis == "X":
                g01 = f'G00 X{float(pos)} ; (G00 Rapid Move)'
            elif axis == "Y":
                g01 = f'G00 Y{float(pos)} ; (G00 Rapid Move)'
            elif axis == "Z":
                g01 = f'G00 Y{float(pos)} ; (G00 Rapid Move)'
            elif axis == "XY":
                g01 = f'G00 X{float(pos)} Y{float(pos2)} ; (G01 Rapid Move)'
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            return Response(
                g01,
                status=status.HTTP_200_OK
            )
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
            # safeStart = "G54 G17 G90 G20"
            if axis == "X":
                g01 = f'G01 X{float(pos)} F{float(feed_rate)} ; (G01 Linear Move)'
            elif axis == "Y":
                g01 = f'G01 Y{float(pos)} F{float(feed_rate)} ; (G01 Linear Move)'
            elif axis == "Z":
                g01 = f'G01 Y{float(pos)} F{float(feed_rate)} ; (G01 Linear Move)'
            elif axis == "XY":
                g01 = f'G01 X{float(pos)} Y{float(pos2)} F{float(feed_rate)} ; (G01 Linear Move)'
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            # print(g01)
            return Response(
                g01,
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
            x_pos = request.data['xPos']
            y_pos = request.data['yPos']
            z_pos = request.data['zPos']
            reference = request.data['reference']
            peck_depth = request.data['peckDepth']
            feed_rate = request.data['feedRate']
            sendZHome = f'G28 Z'
            goToHole = f'G00 X{x_pos} Y{y_pos} Z{z_pos} ; (Rapid to hole location @Z Reference Point)'
            peckDrill = f'G83 Z{z_pos} R{reference} Q{peck_depth} F{feed_rate} ; (G83 Peck Drill)'
            cancelCannedCycle = f'G80 ; (Cancel Canned Cycle)'
            return Response(
                f'{sendZHome},{goToHole},{peckDrill},{cancelCannedCycle}',
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )


class FacingTemplate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            tool_number = request.data['toolNumber']
            spindle_rpm = request.data['spindleRpm']
            feed_rate = request.data['feedRate']
            width = request.data['width']
            depth = request.data['depth']
            clearance = request.data['request']
            doc = request.data['doc']
            plunge_rate = request.data['plungeRate']
            step_over = request.data['stepOver']
            cutter_diameter = request.data['cutterDiameter']
            x = -width
            print(f'G00 X{width + cutter_diameter} Y0 Z{clearance}')
            # Z Depth of the facing operation @ programmed plungerate
            while x:
                print(f'G01 Z{doc} F{plunge_rate}')
                print(f'G01 X{0 - cutter_diameter} F{feed_rate}')
                print(f'G01 Z{clearance} F{plunge_rate}')
                if y < width*-1:
                    break
                print(f'G00 X{width + cutter_diameter} Y{y-step_over}')
                y = y-step_over
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )

class RectangleTemplate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {'error': True, 'error_msg': e},
                status=status.HTTP_400_BAD_REQUEST
            )
