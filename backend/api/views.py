from rest_framework import generics, viewsets
from .serializers import LastMessagesSerializer, RoomSerializer
from chat_app.models import Message, Room


class LastMessagesList(generics.ListAPIView):
    serializer_class = LastMessagesSerializer

    def get_queryset(self):
        room_id = int(self.kwargs['room_id'])
        return Message.objects.filter(room__pk=room_id).order_by('-date')[:10:-1]


class RoomViewSet(viewsets.ModelViewSet):
    serializer_class = RoomSerializer

    def get_queryset(self):
        return Room.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
