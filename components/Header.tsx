import React from 'react';

const DrivoLogo: React.FC = () => (
  <svg width="100" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.132 35.6C16.932 35.6 12.372 34.02 8.452 30.86C4.532 27.7 2.572 23.54 2.572 18.38C2.572 13.22 4.532 9.06 8.452 5.9C12.372 2.74 16.932 1.16 22.132 1.16C26.132 1.16 29.572 2.06 32.452 3.86L29.692 9.98C27.412 8.66 25.012 8 22.492 8C19.332 8 16.732 8.8 14.692 10.4C12.652 12 11.632 14.42 11.632 17.66V19.1C11.632 22.34 12.652 24.76 14.692 26.36C16.732 27.96 19.332 28.76 22.492 28.76C25.012 28.76 27.412 28.1 29.692 26.78L32.452 32.9C29.572 34.7 26.132 35.6 22.132 35.6Z" fill="#0f172a"/>
    <path d="M43.7915 35V3.8H51.4315V35H43.7915Z" fill="#0f172a"/>
    <path d="M72.0833 35L61.7633 3.8H70.6433L76.5833 22.88L82.2233 3.8H90.5633L80.1833 35H72.0833Z" fill="#0f172a"/>
    <path d="M102.664 35V3.8H110.304V28.76H120.384V35H102.664Z" fill="#0f172a"/>
    <path d="M145.411 35.6C139.731 35.6 135.051 33.86 131.371 30.38C127.691 26.9 125.851 22.52 125.851 17.24C125.851 11.96 127.691 7.58 131.371 4.1C135.051 0.619999 139.731 -1.13008e-05 145.411 -1.13008e-05C151.091 -1.13008e-05 155.771 1.74 159.451 5.22C163.131 8.7 164.971 13.08 164.971 18.36C164.971 23.64 163.131 28.02 159.451 31.5C155.771 34.98 151.091 35.6 145.411 35.6ZM145.411 28.88C148.451 28.88 150.931 27.8 152.851 25.64C154.771 23.48 155.731 20.78 155.731 17.54V16.7C155.731 13.46 154.771 10.76 152.851 8.6C150.931 6.44 148.451 5.36 145.411 5.36C142.371 5.36 139.891 6.44 137.971 8.6C136.051 10.76 135.091 13.46 135.091 16.7V17.54C135.091 20.78 136.051 23.48 137.971 25.64C139.891 27.8 142.371 28.88 145.411 28.88Z" fill="#0f172a"/>
    <path d="M120.311 18L108.311 26.6603V9.33975L120.311 18Z" fill="#0f172a"/>
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-slate-100/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo can be placed here if needed, but it's in the sidebar now */}
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right text-sm text-slate-600 hidden sm:block">
              <p className="font-medium text-slate-700">Buzzouts Today: <span className="font-bold text-slate-800">19</span></p>
              <p className="text-slate-500">Loss: $1,070</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-drivo-blue-600 to-violet-600 flex items-center justify-center text-xl font-semibold text-white shadow-md">
                  A
                </div>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-slate-100"></span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;