import React from "react";
import {Input} from "@nextui-org/react";

export default function Search({searchTriger}) {
  return (
    <div className="w-full flex-wrap  gap-4">
      <Input type="text" label="Saerch" placeholder="Enter your Pokeman"  onChange={searchTriger}/>
    </div>
  );
}
