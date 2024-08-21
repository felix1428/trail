import React from 'react';
import treasurehunt from '../images/treasure hunt.png'

export default function Tech() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src={treasurehunt} alt="Event 1" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">IDEA BLITZ</h2>
                    </div>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
                </div>
            </div>

            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src="https://source.unsplash.com/random/300x300/?2" alt="Event 2" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">CODING SENSEI</h2>
                    </div>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
                </div>
            </div>

            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src="https://source.unsplash.com/random/300x300/?3" alt="Event 3" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">WEB DESIGN</h2>
                    </div>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
                </div>
            </div>

            <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src="https://source.unsplash.com/random/300x300/?4" alt="Event 4" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between px-16 py-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">TECHNICAL QUIZ</h2>
                    </div>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">Explore More</button>
                </div>
            </div>
        </div>
    );
}
