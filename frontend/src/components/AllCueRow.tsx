// CueRow.tsx
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useWebSocket } from '../contexts/WebSocketContext';

const AllCueRow: React.FC<{ headerText: string, CueType: string, ParName: string }> = ({ headerText, CueType, ParName }) => {
  const webSocket = useWebSocket();

  const [activeCue, setActiveCue] = useState<number>(0)

  useEffect(() => {
    const payload = { type:'setParameter', CueType, ParName, value: activeCue };
    console.log('sending from effect', payload);
    webSocket.send(JSON.stringify(payload));
  }, [activeCue, CueType, ParName, webSocket]);

  return (
    <div className="flex items-center space-x-2 mt-2">
      <span className="w-32 text-gray-400 text-sm">{headerText}</span>
      {[1, 2, 3, 4, 5].map(cue => (
        <button
          key={cue}
          onClick={() => setActiveCue(cue != activeCue ? cue : 0)} // is the same button being clicked?
          className={classNames(
            cue === activeCue ? "border-yellow-500" : "border-gray-500", // is the button active?
            "px-3 py-1 rounded border-2 text-sm font-medium focus:outline-none bg-gray-800 text-gray-300 hover:bg-gray-700", // button style
          )}
        >
          {`Cue ${cue}`} {/* display the cue number */}
        </button>
      ))}
    </div>
  );
};

export default AllCueRow;
