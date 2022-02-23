import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleMenu = () => {
       if(document.querySelector("#mob-nav").classList.contains("hidden")){
             document.querySelector("#mob-nav").classList.replace("hidden", "block");
       }
       else{
            document.querySelector("#mob-nav").classList.replace("block", "hidden");
       }
    }

    return (
        <div>
            <div className="bg-blue-700 text-white flex justify-between items-center px-6 py-2 lg:px-24 lg:py-6">
            <div className="text-lg md:text-2xl font-bold">Quotebank</div>
            <div className="navs hidden md:block">
                <Link to="/" className="inline-block px-4 cursor-pointer hover:font-bold">Home</Link>
                <Link to="about" className="inline-block px-4 cursor-pointer hover:font-bold">About</Link>
                <Link to="contact" className="inline-block px-4 cursor-pointer hover:font-bold">Contact</Link>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleMenu} className="h-5 w-5 md:hidden cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        </div>
            <div className="bg-blue-700 cursor-pointer font-bold text-md text-white px-4 hidden" id="mob-nav">
                <Link to="/" className="block p-2 hover:scale-100 transition-all">Home</Link>
                <Link to="about" className="block p-2">About</Link>
                <Link to="contact" className="block p-2">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
