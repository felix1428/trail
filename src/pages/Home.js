import React from 'react';
import Timer from '../component/Timer'; // Make sure to import the Timer component
import gif from '../images/gif.png'
export default function Home() {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img 
          src={gif} 
          alt="Activewear" 
          className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" 
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
          <div className="space-y-2">
            <a 
              rel="noopener noreferrer" 
              href="#" 
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
                Time's Ticking - Are You Ready Buddys ?
            </a>
            
          </div>
          <div className="timer text-gray-100 dark:text-gray-800">
            <Timer />
            
          </div>
        </div>
      </div>
    </div>
    
  );
}
