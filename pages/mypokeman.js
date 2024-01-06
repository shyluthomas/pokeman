
import React, { useEffect, useState } from "react";
import {Avatar} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import PokemanCardPrisma from "../components/pokemanCardPrisma";
import Search from "../components/search";
import NoData from "../components/noData";
export default function MyPockeman({pokemanData}) {

  const [pokemanList, setPokemanList] = useState(pokemanData)

  const filterPokeman = (e) => {
    const searchText = e.target.value;
    if(searchText.length > 0) {
      const filterData = pokemanData.filter(({name}) =>  name.startsWith(searchText));
      setPokemanList(filterData);
    }

  }

  return (

    <div className="w-full">
      <div className="flex flex-column justify-start">
        <div className="w-full">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 m-2" /><h3 className="font-medium text-large"> Pokeman list</h3>
        </div>
        <div className="flex">
          <Search data={pokemanData} searchTriger={filterPokeman}></Search>
        </div>
     </div>
     <Divider className="my-4" />
     {pokemanList.length === 0 && <NoData></NoData>}
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
        {pokemanList.map((item, index) => (
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