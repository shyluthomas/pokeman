
import React, { useEffect, useState } from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

 function PokemanCardPrisma({data}) {
    if (!data) {
        return null
    }
  return (
   <>
          <Card shadow="sm" key={data.name} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={data.name}
                className="w-full object-cover "
                src={`/sprites/${data.id}.svg`}
                // src={pokemanDeta && pokemanDeta.sprites.front_default}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{data.name}</b>
              <p className="text-default-500">More</p>
            </CardFooter>
          </Card>
   </>
  )
}



export default PokemanCardPrisma;