
import React, { useEffect, useState } from "react";
import {Avatar} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import PokemanCard from '../components/pokemanCard';
import Search from "../components/filter";

export default function Home({pokemanData}) {
  return (
    <div className="w-full">
      <div className="flex flex-column">
        <div>
             <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 m-2" /><h3 className="font-medium text-large"> Pokeman list</h3>
        </div>
        <div>
          <Search data={pokemanData}></Search>
        </div>
     </div>
     <Divider className="my-4" />
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
        {pokemanData.map((item, index) => (
         <PokemanCard data={item} key={index}></PokemanCard>
        ))}
      </div>
</div>
  );
}

 export async function getStaticProps () {
  const res = await fetch('http://pokeapi.co/api/v1/pokemon?limit=151&offset=0');
  const pokemanData = await res.json();
  return {
    props : {
      pokemanData: pokemanData.results
    }
  }


}