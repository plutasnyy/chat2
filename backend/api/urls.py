from django.conf.urls import url
from django.urls import include
from rest_framework.routers import DefaultRouter
from .views import LastMessagesList, RoomViewSet

router = DefaultRouter()
router.register('rooms', RoomViewSet, 'rooms')

urlpatterns = [
    url('^lastmessages/(?P<room_id>.+)/$', LastMessagesList.as_view()),
    url("^", include(router.urls)),
]
