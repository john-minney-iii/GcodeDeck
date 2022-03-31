from django.contrib import admin
from .models import ContactRequest, ReleasePost, SystemRequest

admin.site.register(ContactRequest)
admin.site.register(ReleasePost)
admin.site.register(SystemRequest)
