"use client";

import {Spotlight} from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import React from 'react'

import Link from 'next/link'
const HeroSection = () => {
  return (
    <div className=" h-auto text-white md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
      <div className=" p-4 relative z-10 w-full text-center">
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
          Design your Business  !
        </h1>
        <p className=' mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo iure labore dolorem eum consequatur aspernatur. Beatae facilis, non maiores tempora dignissimos, aliquid, repellendus officiis est minima distinctio consequatur possimus.</p>
      </div>
      <div>
      <Button
        borderRadius="1.75rem"
        className="bg-blue dark:bg-slate-900 text-white dark:text-white border-red-200 dark:border-slate-800"
      >
        <Link href={"/courses"}>
        Explore Services</Link>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection