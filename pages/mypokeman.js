
import React, { useEffect, useState } from "react";
import {Avatar} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import PokemanCardPrisma from "../components/pokemanCardPrisma";
export default function MyPockeman({pokemanData}) {

  return (

    <div className="w-full">
      <div className="flex flex-column">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 m-2" /><h3 className="font-medium text-large"> Pokeman list</h3>
     </div>
     <Divider className="my-4" />
   
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
        {pokemanData.map((item, index) => (
         <PokemanCardPrisma data={item} key={index}></PokemanCardPrisma>
        ))}
      </div>
</div>
  );
}

 export async function getStaticProps () {
  const res = await fetch('http://localhost:3000/api/pokeman');
  const pokemanData = await res.json();
  return {
    props : {
      pokemanData: pokemanData.data
    }
  }


}