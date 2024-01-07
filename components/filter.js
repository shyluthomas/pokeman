import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

export default function Filter({triggerfilter}) {
    const data = [
      {label: "clear", value: ""},
      {label: "defense", value: "defense"},
      {label: "special-attack", value: "special-attack"},
      {label: "speed", value: "speed"},
      {label: "hp", value: "hp"},
      {label: "special-defense", value: "special-defense"},
      {label: "attack", value: "attack"},
      {label: "killer", value: "killer"},
    ]

  return (
    <div className="w-full display-inline px-4">
        <Autocomplete
          label = "Filter by"
          defaultItems={data}
          className="max-w-lg"
        >
          {(item) => <AutocompleteItem key={item.value} onClick={triggerfilter}>{item.label}</AutocompleteItem>}
        </Autocomplete>
    </div>
  );
}
