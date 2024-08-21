import React from "react";
import "../App.css";
import tech from '../images/tech.jpeg';
import nontech from '../images/nontech.png';

export default function Event() {
    return (
        <section className="p-4 lg:p-8 bg-transparent text-gray-100 dark:text-gray-800">
            <div className="container mx-auto space-y-12">
                <h2 className="blueline text-5xl font-bold text-white text-center">Exciting Events</h2>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src={tech} alt="" className="h-80 bg-gray-500 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900 dark:bg-gray-50">
                        <span className="text-xs uppercase text-gray-400 dark:text-gray-600">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Explore the Events</button>
                        <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/sections">
                            <span>Learn More</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src={nontech} alt="" className="h-80 bg-gray-500 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900 dark:bg-gray-50">
                        <span className="text-xs uppercase text-gray-400 dark:text-gray-600">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 text-gray-400 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
