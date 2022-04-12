from django.urls import path
from .views import ToolChange, SpindleCommand, RapidMovement, \
    LinearMovement, Drilling, FacingTemplate, RectangleTemplate

urlpatterns = [
    path('', ToolChange.as_view(), name='tool-change'),
    path('', SpindleCommand.as_view(), name='spindle-command'),
    path('', RapidMovement.as_view(), name='rapid-movement'),
    path('', LinearMovement.as_view(), name='linear-movement'),
    path('', Drilling.as_view(), name='drilling'),
    path('', FacingTemplate.as_view(), name='facing-template'),
    path('', RectangleTemplate.as_view(), name='rectangle-template'),
]
