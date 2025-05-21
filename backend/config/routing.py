from django.urls import path
from web_socket_server.consumers import LightingConsumer

websocket_urlpatterns = [
    path('ws/lighting/', LightingConsumer.as_asgi()),
]