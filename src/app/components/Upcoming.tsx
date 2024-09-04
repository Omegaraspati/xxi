"use client"

import React from 'react'
import Image from 'next/image'
import dulmuluk from '@/assets/dulmuluk.jpg'
import tujubelas from '@/assets/d17.png'
import bagman from '@/assets/bagman.jpg'
import tigabelas from '@/assets/r13.png'
import cdt from '@/assets/cinta dari timor.jpg'
import dead from '@/assets/dead talent.jpg'
import SU from '@/assets/su.png'

const Upcoming = () => {
    return (
        <div>
            <div className='sm:max-w-[1300px] mx-auto'>
                <div className=' pt-20 flex items-center'>
                    <div className="w-px h-12 bg-teal-800"></div>
                    <h1 className='bg-teal-800 text-white font-bold tracking-widest py-1 pl-10 pr-10'>Up Coming</h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 pt-5">
                    <div className="h-full">
                        <div>
                            <article className="overflow-hidden transition cursor-pointer space-y-2">
                                <Image alt="iamstill" src={bagman} className="h-full w-full object-cover" />
                                <h1 className='text-center font-semibold text-xl'>Jung Kook: I Am Still</h1>
                                <Image alt="17" src={tujubelas} width={50} height={10} className="mx-auto pt-10" />
                            </article>
                        </div>
                    </div>

                    <div className="h-full">
                        <div>
                            <article className="overflow-hidden transition cursor-pointer space-y-2">
                                <Image alt="houndwars" src={cdt} className="h-full w-full object-cover" />
                                <h1 className='text-center font-semibold text-xl'>Hounds Of War</h1>
                                <Image alt="17" src={tigabelas} width={50} height={10} className="mx-auto pt-10" />
                            </article>
                        </div>
                    </div>

                    <div className="h-full">
                        <div>
                            <article className="overflow-hidden transition cursor-pointer space-y-2">
                                <Image alt="seni" src={dead} className="h-full w-full object-cover" />
                                <h1 className='text-center font-semibold text-xl'>Seni Memahami Kekasih</h1>
                                <Image alt="17" src={tigabelas} width={50} height={10} className="mx-auto pt-10" />
                            </article>
                        </div>
                    </div>

                    <div className="h-full">
                        <div>
                            <article className="overflow-hidden transition cursor-pointer space-y-2">
                                <Image alt="alien" src={dulmuluk} className="h-full w-full object-cover" />
                                <h1 className='text-center font-semibold text-xl'>Alien: Romulus(IMAX 2D)</h1>
                                <Image alt="17" src={SU} width={40} height={30} className="mx-auto pt-10" />
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-10 pb-24'>            
                <button className='bg-teal-800 py-1 rounded-lg px-5 text-white uppercase tracking-widest text-sm text-center'>
                view More
            </button>
            </div>

        </div>
    )
}

export default Upcoming