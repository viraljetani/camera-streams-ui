import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CameraStream from './components/CameraStream';
import type { CameraData } from './types';

const openGateReasons = ['Contractor', 'FOC', 'Guest No booking', 'Aggressive', 'Staff No Booking', 'Emergency', 'Late Check Out', 'Owner or Resident'];

const cameraStreamsData: CameraData[] = [
  {
    id: 'princess-entry',
    name: 'Princess St Entry',
    isReadingPlate: false,
    hasRestartButton: false,
    imageUrl: null, // No Camera Stream
    buttons: openGateReasons,
  },
  {
    id: 'bay-entry',
    name: 'Bay St Entry',
    isReadingPlate: false,
    hasRestartButton: false,
    imageUrl: 'https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    buttons: openGateReasons,
  },
  {
    id: 'bay-exit',
    name: 'Bay St Exit',
    isReadingPlate: true,
    hasRestartButton: true,
    imageUrl: null, // No Camera Stream
    buttons: openGateReasons,
  },
  {
    id: 'princess-exit',
    name: 'Princess St Exit',
    isReadingPlate: false,
    hasRestartButton: true,
    imageUrl: 'https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    buttons: openGateReasons,
  },
   {
    id: 'level2-entry',
    name: 'Level 2 Entry',
    isReadingPlate: false,
    hasRestartButton: true,
    imageUrl: 'https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    buttons: openGateReasons,
  },
   {
    id: 'level2-exit',
    name: 'Level 2 Exit',
    isReadingPlate: true,
    hasRestartButton: true,
    imageUrl: null, // No Camera Stream
    buttons: openGateReasons,
  },
  {
    id: 'rooftop-entry',
    name: 'Rooftop Entry',
    isReadingPlate: false,
    hasRestartButton: false,
    imageUrl: 'https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    buttons: openGateReasons,
  },
   {
    id: 'rooftop-exit',
    name: 'Rooftop Exit',
    isReadingPlate: false,
    hasRestartButton: false,
    imageUrl: null, // No Camera Stream
    buttons: openGateReasons,
  },
];

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-100 text-slate-900 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Camera Streams</h1>
            <p className="mt-2 text-slate-500">Your facility's live cameras</p>
            <div className="flex items-center space-x-6 mt-4 mb-8">
              <div className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-600">4 Active Gates</span>
              </div>
              <div className="flex items-center">
                 <span className="relative flex h-3 w-3 mr-2">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-600">8 Cameras Live</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cameraStreamsData.map((stream) => (
                <CameraStream key={stream.id} {...stream} />
              ))}
            </div>
          </div>
        </main>
        <footer className="text-center p-4 text-slate-400 text-xs">
          Powered by Drivo
        </footer>
      </div>
    </div>
  );
};

export default App;