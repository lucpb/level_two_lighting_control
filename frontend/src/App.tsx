import { useState, type FC } from 'react';
import { WebSocketProvider } from './contexts/WebSocketContext';
import HomePage from './pages/HomePage';
import OperatePage from './pages/OperatePage';
import EditPage    from './pages/EditPage';

const App: FC = () => {
  const [view, setView] = useState<'home'|'operate'|'edit'>('home');

  return (
    <WebSocketProvider url="ws://localhost:8000/ws/lighting/">
      {view === 'home' && (
        <HomePage
          onOperate={() => setView('operate')}
          onEdit={()    => setView('edit')}
        />
      )}

      {view === 'operate' && (
        <OperatePage />
      )}

      {view === 'edit' && (
        <EditPage />
      )}
    </WebSocketProvider>
  );
};

export default App;