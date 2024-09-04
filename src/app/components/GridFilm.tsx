"use client"

import React from 'react'
import DropdownFilm from './NavComponents/DropdownFilm'
import Image from 'next/image'
import iamstill from '@/assets/iamstill.jpg'
import tujubelas from '@/assets/d17.png'
import houndwars from '@/assets/houndswar.jpg'
import tigabelas from '@/assets/r13.png'
import seni from '@/assets/senikekasih.jpg'
import alien from '@/assets/alien.jpg'
import SU from '@/assets/su.png'
import kangmak from '@/assets/kangmak.jpg'
import kakabos from '@/assets/kakaboss.jpg'
import thaugt from '@/assets/thaught.jpg'
import dosenghoib from '@/assets/dosengaib.jpg'
import crown from '@/assets/thecrown.jpg'
import itwu from '@/assets/itendwithus.jpg'
import subser from '@/assets/subservive.jpg'
import loh from '@/assets/land of happines.jpg'


const GridFilm = () => {
    return (
        <div className='sm:max-w-[1300px] mx-auto'>
            <div className=' pt-20 flex items-center'>
                <div className="w-px h-12 bg-teal-800"></div>
                <h1 className='bg-teal-800 text-white font-bold tracking-widest py-1 pl-2 pr-2'>Now Playing</h1>
                <DropdownFilm />
            </div>
           
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 pt-5">
            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="iamstill" src={iamstill} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Jung Kook: I Am Still</h1>
                        <Image alt="17" src={tujubelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>
                
            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="houndwars" src={houndwars} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Hounds Of War</h1>
                        <Image alt="17" src={tigabelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="seni" src={seni} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Seni Memahami Kekasih</h1>
                        <Image alt="17" src={SU} width={40}height={30}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={alien} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Alien: Romulus(IMAX 2D)</h1>
                        <Image alt="17" src={tigabelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={kangmak} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Kang Mak (From Pee Mak)</h1>
                        <Image alt="17" src={tigabelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={thaugt} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Thaghut</h1>
                        <Image alt="17" src={tigabelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={kakabos} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Kaka Bos</h1>
                        <Image alt="17" src={tigabelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={dosenghoib} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Dosen Ghaib: Sudah Malam atau Sudah Tau</h1>
                        <Image alt="17" src={tujubelas} width={50}height={10}className="mx-auto pt-3" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={loh} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Land Of Happines</h1>
                        <Image alt="17" src={tigabelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>


            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={crown} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>The Crown</h1>
                        <Image alt="17" src={tujubelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={subser} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>Subservience</h1>
                        <Image alt="17" src={tujubelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>

            <div className="h-full">
                <div>
                    <article className="overflow-hidden transition cursor-pointer space-y-2">
                        <Image alt="alien" src={itwu} className="h-full w-full object-cover"/>
                     <h1 className='text-center font-semibold text-xl'>It Ends With Us</h1>
                        <Image alt="17" src={tujubelas} width={50}height={10}className="mx-auto pt-10" />
                     </article>
                </div>
            </div>


            </div>
        </div>
    )
}

export default GridFilm