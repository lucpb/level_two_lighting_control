import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import OperatePage from './pages/OperatePage';
import EditPage    from './pages/EditPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home'|'operate'|'edit'>('home');

  return (
    <>
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
    </>
  );
};

export default App;