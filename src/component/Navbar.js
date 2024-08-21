import React from "react";
import { Link } from "react-router-dom";
import must from "../images/must.jpeg"; // You might want to use this as an image source, not an XML namespace

export default function Navbar() {
    return (
        <header className="p-4 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to="/event" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Event</Link>
                    </li>
                    <li className="flex">
                        <Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</Link>
                    </li>
                    <li className="flex">
                        <Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- text-violet-400 dark:text-violet-600 border-violet-400 dark:border-violet-600">Link</Link>
                    </li>
                </ul>
                <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={must} alt="Logo" className="w-8 h-8" />
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to="/event" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Event</Link>
                    </li>
                    <li className="flex">
                        <Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</Link>
                    </li>
                    <li className="flex">
                        <Link to="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</Link>
                    </li>
                </ul>
                <button title="Button" type="button" className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
