import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

export default function Search({data}) {
    const triggerSearch = (e) => {
        // e.preventDefault();
        console.log('first', e)
    }

  return (
    <Autocomplete
      defaultItems={data}
      placeholder="Search an pokeman"
      className="max-w-lg"
    >
      {(item) => <AutocompleteItem key={item.id} onClick={triggerSearch}>{item.name}</AutocompleteItem>}
    </Autocomplete>
  );
}
