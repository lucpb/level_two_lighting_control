import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

from django.core.asgi             import get_asgi_application
from channels.security.websocket  import OriginValidator
from channels.routing             import ProtocolTypeRouter, URLRouter
from channels.auth                import AuthMiddlewareStack
from .routing                     import websocket_urlpatterns

application = ProtocolTypeRouter({
  "http": get_asgi_application(),
  "websocket": AuthMiddlewareStack(URLRouter(websocket_urlpatterns)),
})