import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-blue-700 text-white flex justify-between items-center px-6 py-2 lg:px-24 lg:py-6">
            <div className="text-lg md:text-2xl font-bold">Quotebank</div>
            <div className="navs hidden md:block">
                <div className="inline-block px-4 cursor-pointer hover:font-bold">Home</div>
                <div className="inline-block px-4 cursor-pointer hover:font-bold">About</div>
                <div className="inline-block px-4 cursor-pointer hover:font-bold">Contact</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
        </div>
    )
}

export default Navbar
