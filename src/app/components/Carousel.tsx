'use client'

import Image from 'next/image'
import React from 'react'
import car1 from '@/assets/car1.jpg'
import car2 from '@/assets/car2.jpg'
import car3 from '@/assets/car3.jpg'
import car4 from '@/assets/car4.jpg'
import car5 from '@/assets/car5.jpg'
import car6 from '@/assets/car6.jpg'
import car7 from '@/assets/car7.jpg'
import car8 from '@/assets/car8.jpg'
import car9 from '@/assets/car9.jpg'
import car10 from '@/assets/car10.jpg'
import car11 from '@/assets/car11.jpg'
import car12 from '@/assets/car12.jpg'

const Carousel = () => {
    return (
        <div>
            {/* <!-- Slider --> */}
            <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' className="relative max-w-[60rem] mx-auto pt-10 ">
                <div className="hs-carousel relative overflow-hidden w-full min-h-[200px] sm:min-h-[500px] bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car1} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car2} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car3} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car4} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car5} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car6} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car7} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car8} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car9} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car10} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car11} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-100 ">
                                <span className="self-center text-4xl text-gray-800 transition duration-700">
                                    <Image src={car12} alt={'car1'} width={1000}height={1000}/>
                                </span>
                            </div>
                        </div>


                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

               
            </div>
            {/* <!-- End Slider --> */}
        </div>
    )
}

export default Carousel