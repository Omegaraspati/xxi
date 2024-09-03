import React from 'react'

const DropdownFilm = () => {
  return (
    <div>
        <div className=" hs-dropdown [--trigger:hover] relative inline-flex">
  <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle uppercase py-1.5 px-5 inline-flex items-center gap-x-2 text-sm font-medium border  bg-white text-black  hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    Bandung
  </button>

  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
    <a className="flex items-center gap-x-3.5 uppercase py-1 px-3  text-xs text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 " href="#">
      jakarta
    </a>
    <a className="flex items-center gap-x-3.5 uppercase py-2 px-3  text-xs text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 " href="#">
      bekasi
    </a>
    <a className="flex items-center gap-x-3.5 uppercase py-2 px-3  text-xs text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 " href="#">
      denpasar
    </a>
    <a className="flex items-center gap-x-3.5 uppercase py-2 px-3  text-xs text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 " href="#">
      yogyakarta
    </a>
  </div>
</div>
    </div>
  )
}

export default DropdownFilm