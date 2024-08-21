import React from 'react';
import Timer from '../component/Timer'; // Ensure Timer component is properly imported
import gif from '../images/gif.png';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-5 mx-auto sm:p-10 md:p-16 flex-grow">
        <h1 className="Topic text-5xl font-bold text-white text-center mb-8">
          Intelista CountDown Begins Now
        </h1>
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img 
            src={gif} 
            alt="Activewear" 
            className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" 
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 bg-opacity-70 dark:bg-gray-50 dark:bg-opacity-50">

            <div className="space-y-2">
              <a 
                rel="noopener noreferrer" 
                href="http://www.w3.org/2000/svg" 
                className="inline-block text-2xl font-semibold text-white sm:text-3xl">
                Time's Ticking - Are You Ready Buddys?
              </a>
            </div>
            <div className="timer text-gray-100 dark:text-gray-800">
              <Timer />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-8">
          {/* Container to center buttons */}
          <button
            type="button" 
            onClick={() => navigate('/event')} 
            className="px-8 py-3 font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
          >
            Explore Events
          </button>
          <a
            href="https://forms.gle/your-google-form-id" // Replace with your Google Form URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 font-semibold rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
          >
            Register
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
