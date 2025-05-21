// CueRow.tsx
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useWebSocket } from '../contexts/WebSocketContext';



const CueRow: React.FC<{ headerText: string, CueType: string, ParName: string }> = ({ headerText, CueType, ParName }) => {
  const webSocket = useWebSocket();

  const [cuesDisabled, setCuesDisabled] = useState<boolean>(false);
  const [activeCue, setActiveCue] = useState<number>(0);

  useEffect(() => {
    const payload = { type:'setParameter', CueType, ParName, value: activeCue };
    console.log('sending from effect', payload);
    webSocket.send(JSON.stringify(payload));
  }, [activeCue, CueType, ParName, webSocket]);

  return (
    <div className="flex items-center space-x-2 mt-2">
    <span className="w-32 text-white text-sm">{headerText}</span>
      {[1, 2, 3, 4, 5].map(cue => (
        <button
          key={cue}
          onClick={() => setActiveCue(cue != activeCue ? cue : 0)}
          disabled={cuesDisabled}
          className={classNames(
            activeCue === cue ? "border-yellow-500" : "border-gray-500", // is the button active?
            cuesDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700", // is the button disabled?
            "px-3 py-1 rounded border-2 text-sm font-medium focus:outline-none bg-gray-800 text-white", // button style
          )}
        >
          {`Cue ${cue}`} {/* button text */}
        </button>
      ))}
    </div>
  );
};

export default CueRow;
