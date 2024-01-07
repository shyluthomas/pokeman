import React from "react";
import {Input} from "@nextui-org/react";

export default function Search({searchTriger}) {
  return (
    <div className="w-full display-inline px-4">
      <Input className="w-400" type="text" label="Saerch" placeholder="Enter your Pokeman"  onChange={searchTriger}/>
    </div>
  );
}
