import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return(
    <div className="relative w-full h-screen pt-16">
      
      <Image src= "/sedia.png" alt = "immagine a schermo intero" layout = "fill" ></Image>

    </div>
  );
  }
  
  export default Hero