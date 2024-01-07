
import React, { useEffect, useState } from "react";
import {Avatar} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import Search from "../components/search";
import NoData from "../components/noData";
import Filter from "../components/filter";
import Sort from "../components/sort";
import { sortData } from "../helpers/utilities";
import PokemanCardBlog from "../components/pokemanCardBlog";
export default function Blog({pokemanData}) {
const [search, setSearch] = useState()
const [userFilter, setUserFilter] = useState()
const [userSort, setUserSort] = useState()
const filterPokeman = (e) => {
  const searchText = e.target.value;
  if(searchText.length > 0) {
    setSearch(searchText);
  } else {
    setSearch('');
  }

}

const filterStats = (e) => {
  const filterText = e.target.innerText;
  setUserFilter(filterText)
}

const triggerSort = (e) => {
  const sortText = e.target.innerText;
  setUserSort(sortText);
  } 
let filterData = pokemanData;
if(search){
  filterData = pokemanData.filter(({name}) =>  name.startsWith(search));
}
if(userFilter) {
  if(userFilter !== "clear") {
    filterData = filterData.filter(({stats}) =>  stats.includes(userFilter));
  } 
}
if(userSort) {
    filterData = sortData(userSort,filterData);
}

  return (

    <div className="w-full stroke-black">
      <div className="flex flex-column justify-start">
        <div className="flex w-full flex-column items-center content-center">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 m-2" />
            <h3 className="font-medium text-large"> Pokeman list</h3>
        </div>
        <div className="flex w-full ">
          <Search data={pokemanData} searchTriger={filterPokeman}></Search>
          <Filter triggerfilter={filterStats}></Filter>
          <Sort triggerSort = {triggerSort}></Sort>
        </div>
     </div>
     <Divider className="my-4" />
     {filterData.length === 0 && <NoData></NoData>}
      <div className="w-full gap-2 grid grid-cols-12 px-8">
        {filterData.map((item, index) => (
          <PokemanCardBlog data={item} key={index}></PokemanCardBlog>
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