
import React, { useEffect, useState } from 'react'
import {Card, CardHeader, CardFooter, Image} from "@nextui-org/react";

 function PokemanCardBlog({data}) {
    if (!data) {
        return null
    }
  return (
   <>

    <Card key={data.name} className="sm:col-span-3">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-large text-black/60 uppercase font-bold">{data.name}</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover hover:animate-ping"
        src={data.id > 152 ? '/images/1.jpg':`/sprites/${data.id}.svg`}
      />
    </Card>

   </>
  )
}



export default PokemanCardBlog;