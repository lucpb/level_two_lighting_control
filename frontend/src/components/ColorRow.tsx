// ColorRow.tsx
import React, { useState } from 'react';
import classNames from 'classnames';  // for conditional class utilities

const ColorRow: React.FC<{ headerText: string }> = ({ headerText }) => {

  const [selectedColor, setSelectedColor] = useState<string>('white')

  const colors = [
    { name: 'white',  bgClass: 'bg-white'      },
    { name: 'red',    bgClass: 'bg-red-500'    },
    { name: 'blue',   bgClass: 'bg-blue-500'   },
    { name: 'green',  bgClass: 'bg-green-500'  },
    { name: 'orange', bgClass: 'bg-orange-500' },
  ];

  return (
    <div className="flex items-center space-x-3 mt-2">
      <span className="w-32 text-white text-sm">{headerText}</span>
      {colors.map(color => (<button
        key={color.name} 
        onClick={() => setSelectedColor(color.name)}
        className={classNames(
          "w-10 h-10 focus:outline-none rounded",
          color.bgClass,
          // Highlight with a yellow ring if this color is selected
          selectedColor === color.name && "ring-3 ring-yellow-500"
        )}
        />
      ))}
    </div>
  );
};

export default ColorRow;

