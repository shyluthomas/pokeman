
import React, { useEffect, useState } from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import axios from 'axios';

 function PokemanCard({data}) {
    const [pokemanDeta, setPokemanDeta] = useState();
    useEffect(() => {
        (async function fetchDetails() {
            const response = await axios.get(`api/api?url=${data.url}`);
            const pokemanDetail = await response.json();
            await axios.post('api/pokeman',
               {
                name: data.name,
                stats: JSON.stringify(pokemanDetail.stats),
                types: JSON.stringify(pokemanDetail.types)
              }
            )
            setPokemanDeta(pokemanDetail);
        })();
    },[data])
    if (!pokemanDeta) {
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
                src={`/sprites/${pokemanDeta.id}.svg`}
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



export default PokemanCard;