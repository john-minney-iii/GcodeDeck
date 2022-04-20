from django.urls import path
from .views import ToolChange, SpindleCommand, RapidMovement, \
    LinearMovement, Drilling, FacingTemplate, RectangleTemplate

urlpatterns = [
    path('toolChange/', ToolChange.as_view(), name='tool-change'),
    path('spindleCommand/', SpindleCommand.as_view(), name='spindle-command'),
    path('rapidMovement/', RapidMovement.as_view(), name='rapid-movement'),
    path('linearMovement/', LinearMovement.as_view(), name='linear-movement'),
    path('drilling/', Drilling.as_view(), name='drilling'),
    path('facingTemplate/', FacingTemplate.as_view(), name='facing-template'),
    path('rectangleTemplate/', RectangleTemplate.as_view(), name='rectangle-template'),
]
