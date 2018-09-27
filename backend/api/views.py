from rest_framework import generics, viewsets, permissions
from .serializers import LastMessagesSerializer, RoomSerializer
from chat_app.models import Message, Room
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


@method_decorator(csrf_exempt, name='dispatch')
class LastMessagesList(generics.ListAPIView):
    serializer_class = LastMessagesSerializer

    def get_queryset(self):
        room_id = int(self.kwargs['room_id'])
        return Message.objects.filter(room__pk=room_id).order_by('-date')[:10:-1]

    def process_request(self, request):
        setattr(request, '_dont_enforce_csrf_checks', True)


@method_decorator(csrf_exempt, name='dispatch')
class RoomViewSet(viewsets.ModelViewSet):
    serializer_class = RoomSerializer

    def get_queryset(self):
        return Room.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def process_request(self, request):
        setattr(request, '_dont_enforce_csrf_checks', True)
