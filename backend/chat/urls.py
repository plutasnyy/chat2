from django.conf.urls import url, include
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^api/', include('api.urls'), obtain_jwt_token),
    url(r'^admin/', admin.site.urls),
]
