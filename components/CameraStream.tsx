import React from 'react';
import type { CameraData } from '../types';

const RpiDisplay: React.FC = () => (
  <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex flex-col items-center justify-center text-white p-3 overflow-hidden">
    <div className="absolute inset-0 bg-grid-slate-700/40 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
    <span className="absolute top-2 left-2 text-xs text-slate-400 flex items-center">
        <span className="h-1.5 w-1.5 bg-slate-600 rounded-full mr-1"></span> 26°ᶜ
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400 mb-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
    <h3 className="text-base font-semibold text-green-400 text-center">Reading plate</h3>
    <p className="text-slate-300 mt-1 text-center text-xs">Please be patient - plate being read and processed.</p>
  </div>
);

const CameraFeed: React.FC<{ imageUrl: string | null; name: string }> = ({ imageUrl, name }) => (
   <div className="relative w-full h-full bg-slate-200 rounded-xl">
    {imageUrl ? (
      <img src={imageUrl} alt={`Live feed from ${name}`} className="w-full h-full object-cover rounded-xl" />
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55a1 1 0 01.894.448l2.222 5.555A1 1 0 0122 17H2a1 1 0 01-.666-1.445l2.222-5.555A1 1 0 014.448 10H9m6 0a3 3 0 11-6 0 3 3 0 016 0zM9 10V6a3 3 0 013-3v0a3 3 0 013 3v4m-6 0v4a3 3 0 003 3v0a3 3 0 003-3v-4" />
        </svg>
      </div>
    )}
  </div>
);

const OpenGateControls: React.FC<{ buttons: string[] }> = ({ buttons }) => {
  if (buttons.length === 0) return null;
  return (
     <div className="mt-6">
        <p className="text-slate-500 font-medium mb-3 text-sm">Open Gate - Select Reason</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {buttons.map((label, index) => (
            <button
                key={index}
                className="bg-drivo-blue-50 text-drivo-blue-700 font-semibold py-2.5 px-3 rounded-lg text-sm hover:bg-drivo-blue-100 hover:text-drivo-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-drivo-blue-600"
            >
                {label}
            </button>
            ))}
        </div>
    </div>
  )
}

const CameraStream: React.FC<CameraData> = ({ name, isReadingPlate, hasRestartButton, imageUrl, buttons }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-drivo-card transition-shadow duration-300 hover:shadow-drivo-card-hover">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-700">{name}</h2>
        {hasRestartButton && (
          <button className="bg-gradient-to-br from-orange-500 to-drivo-orange-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-sm hover:shadow-md hover:from-orange-600 hover:to-drivo-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-drivo-orange-500">
            Restart Quest Terminal
          </button>
        )}
      </div>
      
      <div className="w-full aspect-[21/9]">
        <div className="flex items-stretch gap-4 h-full">
            {isReadingPlate && (
                <div className="w-1/2">
                    <RpiDisplay />
                </div>
            )}
            <div className={isReadingPlate ? "w-1/2" : "w-full"}>
                <CameraFeed imageUrl={imageUrl} name={name} />
            </div>
        </div>
      </div>
      
      <OpenGateControls buttons={buttons} />
    </div>
  );
};

export default CameraStream;