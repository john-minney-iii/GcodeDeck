from django.urls import path
from .views import CreateContactReqest, CreateSystemRequest, CreateBugReport

urlpatterns = [
    path('contactUs/', CreateContactReqest.as_view(), name='contact-us'),
    path('systemRequest/', CreateSystemRequest.as_view(), name='system-request'),
    path('bugReport/', CreateBugReport.as_view(), name='bug-report'),
]
