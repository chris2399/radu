import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Camp = () => {
  return (
    <div className="bg-black text-white min-h-screen">

        <div className="bg-white text-black w-full h-96 flex items-center justify-center relative mt-15 ">  
        <Image src= "/h10-background-1.jpg" alt = "immagine a schermo inter" layout='fill' objectFit= "cover"></Image>       
        <button className=" absolute top-5 bg-white text-3xl hover:text-yellow-500 border-2 border-yellow-500 rounded-lg font-light px-8 py-4 ">prenota ora</button>   
        <h1 className="text-4xl font-bold text-black drop-shadow-lg absolute top-15" >
        INOSLITAMENTE RAFFINATO
          </h1>
          <h2 className="text-1xl font-bold text-black drop-shadow-lg absolute bottom-12">
          Esperienza esclusiva e ricercata, dedicata agli intenditori e agli esploratori del gusto. Un connubio di tradizione giapponese 
          e innovazione culinaria, pensato per chi cerca un sushi elegante, insolito e straordinariamente autentico.
          </h2>


        <div className=' relative flex  items-center top-96'>

          <div className=' relative flex flex-col' >
         <Image src="/h10-img-1.png" width={70} height={70} alt='' className='ml-24'></Image><br />
         <h1 className='text-white 2x1 ml-24'>LA STORIA</h1>
         <p className='text-white'>Un luogo nato dall'incontro tra tradizione <br /> giapponese e spirito innovativo,
           dove l'arte <br /> del sushi si unisce alla ricerca di sapori <br />
          raffinati per offrire un'esperienza culinaria <br />senza precedenti.</p>
         </div>

         <div className=' relative flex flex-col'>
          <Image src="/h10-img-2.png" width={70} alt=' ' height={70} className='ml-24'></Image><br />
          <h1 className='text-white 2x1 ml-24'> SPECIALITÁ</h1>
          <p className='text-white'>La tradizione giapponese incontra <br /> l'innovazione: specialità di pesce frollato e <br />sakè d'eccellenza si fondono per regalare <br /> un'esperienza di sushi unica e sofisticata.</p>
          </div>


        </div>
     




     </div>

      
     
      
     
    </div>
  )
}

export default Camp
