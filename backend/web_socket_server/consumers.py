from channels.generic.websocket import JsonWebsocketConsumer

class LightingConsumer(JsonWebsocketConsumer):

    def connect(self):
        self.accept()
        self.send_json({"type":"greeting","payload":"helloTD"})

    def receive_json(self, content, **kwargs):
        self.send_json({
            "type": "greeting",
            "message": "Hello from Django Channels!"
        })

    def disconnect(self, close_code):
        # Called when the socket closes
        pass