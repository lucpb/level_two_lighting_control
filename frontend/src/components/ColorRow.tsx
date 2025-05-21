// ColorRow.tsx
import { useState, type FC } from 'react';
import classNames from 'classnames';  // for conditional class utilities
import { useWebSocket } from '../contexts/WebSocketContext';
import { useColorTable } from '../hooks/UseColorTable';


const ColorRow: FC<{ headerText: string, CueType: string, ParName: string }> = ({ headerText, CueType, ParName }) => {  
  const webSocket = useWebSocket();
  const table = useColorTable();

  const [selectedColor, setSelectedColor] = useState<number>(0);

  if (!table) {
    return <div className="text-white">Loading colors…</div>;
  }

  const primaryColors = table.groups[0].entries;



  const handleClick = (id: number) => {
    setSelectedColor(id);
    
    webSocket.send(JSON.stringify({
      type: 'setParameter',
      CueType,
      ParName,
      value:   id
    }));
  };

  return (
    <div className="flex items-center space-x-3 mt-2">
      <span className="w-32 text-white text-sm">{headerText}</span>
      {primaryColors.map(color => (
        <button
        key={color.id} 
        onClick={() => handleClick(color.id)}
        className={classNames(
          "w-10 h-10 focus:outline-none rounded",
          selectedColor === color.id && "ring-3 ring-blue-500"
        )}
        style={{
          backgroundColor: `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`
        }}
        />
      ))}
    </div>
  );
};

export default ColorRow;

