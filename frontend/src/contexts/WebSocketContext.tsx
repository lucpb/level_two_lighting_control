// WebSocketContext.tsx
import { 
  createContext, 
  useContext, 
  useEffect, 
  useRef, 
  type FC, 
  type ReactNode 
} from 'react'

const WebSocketContext = createContext<WebSocket | undefined>(undefined)

export const WebSocketProvider: FC<{ url: string, children: ReactNode }> = ({ url, children }) => {

  const webSocketRef = useRef<WebSocket | undefined>(undefined)

  const openWebSocket = (url: string) => {
    const newWebSocket = new WebSocket(url)
    webSocketRef.current = newWebSocket
    newWebSocket.onopen    = () => console.log('websocket open')
    newWebSocket.onclose   = () => console.log('websocket closed')
    newWebSocket.onerror   = error => console.error(error)
    return newWebSocket
  }

  const closeWebSocket = () => {
    webSocketRef.current?.close()
  }

  useEffect(() => {
    openWebSocket(url)
    return () => {
      closeWebSocket()
    }
  }, [url])

  return (
    <WebSocketContext.Provider value={webSocketRef.current}>
      {children}
    </WebSocketContext.Provider>
  )
}

export const useWebSocket = () => {
  const currentWebSocket = useContext(WebSocketContext)
  if (currentWebSocket === undefined) {
    throw new Error('WebSocketProvider is missing in the tree')
  }
  return currentWebSocket
}
