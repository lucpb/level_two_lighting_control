// CueRow.tsx
import React, { useState } from 'react';
import classNames from 'classnames';



const CueRow: React.FC<{ headerText: string, CueType: string, ParName: string }> = ({ headerText, CueType, ParName }) => {

  const [cuesDisabled, setCuesDisabled] = useState<boolean>(false);
  const [activeCue, setActiveCue] = useState<number | null>(null);

  return (
    <div className="flex items-center space-x-2 mt-2">
    <span className="w-32 text-white text-sm">{headerText}</span>
      {[1, 2, 3, 4, 5].map(cue => (
        <button
          key={cue}
          onClick={() => !cuesDisabled && cue === activeCue ? setActiveCue(null) : setActiveCue(cue)} // is the same button being clicked?
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
