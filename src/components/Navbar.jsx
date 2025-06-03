import React from 'react'
import { FiSearch } from "react-icons/fi"; // Feather icons
import { IoNotifications } from "react-icons/io5";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <header className='flex justify-between items-center w-full bg-gray-800 h-18 fixed'>
            <div className='flex flex-col justify-items-start pl-70 text-white'>
                <span className='flex text-2xl font-bold'>ISAFP - Network and ICT Resources Management</span>
                <span  className='flex text-s'>Safeguarding Networks. Optimizing ICT Assets</span>
            </div>

            <div className="flex items-center justify-end px-4 gap-5 w-full  max-w-md">
                <label className="relative w-full max-w-md">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search…"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </label>
                <button
                aria-label="Notifications"
                className="relative p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <IoNotifications className="h-5 w-5 text-gray-200" />
                {/* Optional unread badge */}
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
                </button>

                <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                {/* Replace src with user avatar */}
                <img
                    src="/images/avatar.jpg"
                    alt="Profile"
                    className="h-6 w-6 rounded-full object-cover"
                />
                <span className="hidden sm:inline text-gray-200 text-sm">Profile</span>
                </button>
            </div>       
        </header>
    </>
  
  )
}

export default Navbar
