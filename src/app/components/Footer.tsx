'use client'

import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-teal-800 text-white py-8">
                <div className="container mx-auto flex justify-between items-center">
                    {/* <!-- Links --> */}
                    <div className="flex space-x-6 text-ms text-gray-200">
                        <a href="#" className="hover:underline">Profile</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <span>|</span>
                        <a href="#" className="hover:underline">Advertising</a>
                    </div>

                    {/* <!-- Social Media Icons --> */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20.88V3.12M3.12 12H20.88M20.88 12H3.12M12 20.88L20.88 3.12M20.88 12L3.12 20.88" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            {/* <!-- Add other icons here similarly --> */}
                        </a>
                        {/* <!-- Repeat for other social media icons --> */}
                    </div>
                </div>

                {/* <!-- Copyright Text --> */}
                <div className="container mx-auto mt-8 pr-96 text-xs text-gray-400">
                    <p>&copy; 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya. Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer