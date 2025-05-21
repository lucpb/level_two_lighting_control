# backend/web_socket_server/consumers.py
from channels.generic.websocket import AsyncJsonWebsocketConsumer
import logging

logger = logging.getLogger(__name__)

class LightingConsumer(AsyncJsonWebsocketConsumer):
    GROUP_NAME = "lighting"

    async def connect(self):
        await self.accept()
        # Add this socket to the "lighting" group
        await self.channel_layer.group_add(self.GROUP_NAME, self.channel_name)
        # Optional greeting
        await self.send_json({"type":"greeting","payload":"helloTD"})

    async def disconnect(self, code):
        # Remove from group on disconnect
        await self.channel_layer.group_discard(self.GROUP_NAME, self.channel_name)

    async def receive_json(self, content, **kwargs):
        # Log it
        logger.info("WebSocket payload: %r", content)

        # Broadcast *that* same payload to everyone in the group:
        await self.channel_layer.group_send(
            self.GROUP_NAME,
            {
                "type":    "broadcast.message",  # maps to `broadcast_message` fn
                "message": content,
            }
        )

    # This handler name comes from the "type" above, with dots → underscores
    async def broadcast_message(self, event):
        # event["message"] is the original JSON content
        await self.send_json(event["message"])
