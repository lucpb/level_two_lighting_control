import React from 'react';
import logo from '../assets/L2 Logo.png';

interface HomePageProps {
  onOperate: () => void;
  onEdit: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOperate, onEdit }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <img
        src={logo}
        alt="Level Two Nightclub Logo"
        className="w-48 h-48 mb-8"
      />
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <button
          onClick={onOperate}
          className="py-4 border-2 border-blue-600 text-blue-600 text-2xl rounded-sm shadow-lg transition-colors bg-transparent hover:bg-blue-600 hover:text-white"
        >
          Operate
        </button>
        <button
          onClick={onEdit}
          className="py-4 border-2 border-gray-400 text-gray-300 text-2xl rounded-sm shadow-lg transition-colors bg-transparent hover:bg-gray-700 hover:text-white"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
