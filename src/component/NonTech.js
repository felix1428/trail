import React from 'react';

export default function NonTech(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8"> 
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">Non tech</h2>
              {/* <p className="text-gray-100 dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
            </div>
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
          </div>
        </div>
      
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8"> 
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">Non tech</h2>
              {/* <p className="text-gray-100 dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
            </div>
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
          </div>
        </div>
      
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src="https://source.unsplash.com/random/300x300/?3" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">WEB DESIGN</h2>
              {/* <p className="text-gray-100 dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
            </div>
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
          </div>
        </div>
      
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <img src="https://source.unsplash.com/random/300x300/?4" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
          <div className="flex flex-col justify-between px-16 py-6 space-y-8"> 
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">TECHNICAL QUIZ</h2>
              {/* <p className="text-gray-100 dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
            </div>
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
          </div>
        </div>
      
        
      </div>
      
            
    );
}