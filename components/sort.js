import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

export default function Sort({triggerSort}) {
    const data = [
      {label: "ASC", value: "ASC"},
      {label: "DESC", value: "DESC"},
    ]
  return (
    <div className="w-full display-inline px-4">
        <Autocomplete
          label = "Sort by"
          defaultItems={data}
          className="max-w-lg"
        >
          {(item) => <AutocompleteItem key={item.value} onClick={triggerSort}>{item.label}</AutocompleteItem>}
        </Autocomplete>
    </div>
  );
}
