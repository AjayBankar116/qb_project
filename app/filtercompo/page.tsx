'use client'


import { useState } from "react";
// import { Chip, ChipGroup } from "@/components/ui/chip";

import { ChipGroup, ChipGroupItem } from "@/components/ui/radio-group"




const filterOptions = [
  { label: "All", value: "all" },
  { label: "Sent", value: "sent" },
  { label: "Draft", value: "draft" },
  { label: "Accepted", value: "accepted" },
  { label: "Rejected", value: "rejected" },
  { label: "Pending", value: "pending" },
];

const filtercomponent = ({ items }: any) => {
  const [selectedFilters, setSelectedFilters] = useState(["all"]);

  const handleFilterChange = (value: any) => {
    setSelectedFilters((prevFilters) => {
      if (value === "all") {
        return ["all"];
      } else {
        const newFilters = prevFilters.includes(value)
          ? prevFilters.filter((filter) => filter !== value)
          : [...prevFilters, value];

        if (newFilters.includes("all")) {
          return [value];
        }

        return newFilters;
      }
    });
  };

  const filteredItems = items.filter((item : any) => {
    if (selectedFilters.includes("all")) {
      return true;
    } else {
      return selectedFilters.some((filter) =>
        item.status.toLowerCase().includes(filter)
      );
    }
  });

  return (
    <div>
      <ChipGroup value={selectedFilters} onValueChange={handleFilterChange}>
        {filterOptions.map((option) => (
          <ChipGroupItem key={option.value} value={option.value}>
            {option.label}
          </ChipGroupItem>
        ))}
      </ChipGroup>
      {filteredItems.map((item: any ) => (
        <div key={item.id}>
          {/* Render the item details */}
          <p>{item.status}</p>
          {/* Add other item properties */}
        </div>
      ))}
    </div>
  );
};


export default filtercomponent


{/* <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup> */}