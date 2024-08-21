import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import must from "../images/must.jpeg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuOnScroll = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', closeMenuOnScroll);
        return () => {
            window.removeEventListener('scroll', closeMenuOnScroll);
        };
    }, []);

    return (
        <header className="p-4 bg-black bg-opacity-50 text-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className={`items-stretch hidden space-x-3 md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li className="flex">
                        <Link to="/event" className="flex items-center px-4 -mb-1 border-b-2 dark:border- hover:text-violet-400">Event</Link>
                    </li>
                    <li className="flex">
                        <Link to="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border- hover:text-violet-400">About us</Link>
                    </li>
                    <li className="flex">
                        <Link to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-  hover:text-violet-400">Home</Link>
                    </li>
                </ul>
                <Link to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={must} alt="Logo" className="w-8 h-8" />
                </Link>
                <button
                    title="Menu"
                    type="button"
                    className="p-4 md:hidden"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <ul className={`absolute top-16 left-0 w-full bg-black bg-opacity-70 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li className="flex">
                    <Link to="/home" className="flex items-center px-4 py-2 text-gray-100 dark:text-gray-800 border-b-2 dark:border-gray-700 hover:text-violet-400" onClick={toggleMenu}>Home</Link>
                </li>
                <li className="flex">
                    <Link to="/event" className="flex items-center px-4 py-2 text-gray-100 dark:text-gray-800 border-b-2 dark:border-gray-700 hover:text-violet-400" onClick={toggleMenu}>Event</Link>
                </li>
                <li className="flex">
                    <Link to="/about" className="flex items-center px-4 py-2 text-gray-100 dark:text-gray-800 border-b-2 dark:border-gray-700 hover:text-violet-400" onClick={toggleMenu}>About Us</Link>
                </li>
            </ul>
        </header>
    );
}
