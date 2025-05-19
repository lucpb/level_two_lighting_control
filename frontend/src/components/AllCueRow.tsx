// CueRow.tsx
import React, { useState } from 'react';
import classNames from 'classnames';

const AllCueRow: React.FC<{ headerText: string, CueType: string, ParName: string }> = ({ headerText, CueType, ParName }) => {

  const [activeCue, setActiveCue] = useState<number | null>(null)

  return (
    <div className="flex items-center space-x-2 mt-2">
      <span className="w-32 text-white text-sm">{headerText}</span>
      {[1, 2, 3, 4, 5].map(cue => (
        <button
          key={cue}
          onClick={() => cue === activeCue ? setActiveCue(null) : setActiveCue(cue)} // is the same button being clicked?
          className={classNames(
            cue === activeCue ? "border-yellow-500" : "border-gray-500", // is the button active?
            "px-3 py-1 rounded border-2 text-sm font-medium focus:outline-none bg-gray-800 text-white hover:bg-gray-700", // button style
          )}
        >
          {`Cue ${cue}`} {/* display the cue number */}
        </button>
      ))}
    </div>
  );
};

export default AllCueRow;
