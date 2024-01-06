 import React from 'react'
 import Image from 'next/image'
 
 export default function Logo() {
   return (
     <span>
        <Image src="/logo.png" alt='logo' width={100} height={60}></Image>
     </span>
   )
 }
 