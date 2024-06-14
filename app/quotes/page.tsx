"use client";

import { Label } from "@/components/ui/label";
import { ChipGroup, ChipGroupItem } from "@/components/ui/radio-group";

import SearchField from "@/components/SearchField";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useState } from "react";
import Link from "next/link";
import SecondaryLayout from "@/components/SecondaryLayout";

const SearchIcon = () => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
  >
    <path
      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const dataAll = [
  {
    id: "#442",
    companyName: "Akash Tech Pvt Ltd",
    status: "Accepted",
    amount: "₹45,005",
    quotes: 1,
    date: "12 June 2023",
  },
  {
    id: "#443",
    companyName: "Tech Solutions Ltd",
    status: "Sent",
    amount: "₹50,000",
    quotes: 2,
    date: "10 June 2023",
  },
  {
    id: "#445",
    companyName: "AMD Solutions Ltd",
    status: "Pending",
    amount: "₹50,000",
    quotes: 3,
    date: "10 June 2023",
  },
  {
    id: "#445",
    companyName: "AMD Solutions Ltd",
    status: "Pending",
    amount: "₹50,000",
    quotes: 3,
    date: "10 June 2023",
  },
  {
    id: "#445",
    companyName: "AMD Solutions Ltd",
    status: "Pending",
    amount: "₹50,000",
    quotes: 3,
    date: "10 June 2023",
  },
];

const filterOptions = [
  { key: "all", label: "All" },
  { key: "sent", label: "Sent" },
  { key: "draft", label: "Draft" },
  { key: "accepted", label: "Accepted" },
  { key: "rejected", label: "Rejected" },
  { key: "pending", label: "Pending" },
];

export default function Quotes() {
  const [filter, setFilter] = useState("all");

  const handleClick = (newStatus: any) => {
    setFilter(newStatus);
  };

  const filteredData = dataAll.filter((item) => {
    if (filter === "all") {
      return true; // Show all data
    } else {
      return item.status.toLowerCase() === filter; // Show data based on selected filter
    }
  });

  return (
    <div>
      {/* header section  */}
      

      {/* body section  */}

      {/* search field start  */}

      <SecondaryLayout>

      <div className=" w-[22.375rem] h-[3.25rem]  flex justify-center items-center    ">
        <SearchField searchIcon={<SearchIcon />} />
      </div>

      {/* search field end */}

      {/* chip section start */}
      <div className=" gap-2  w-[24.375rem] h-[3rem] grid grid-cols-1 justify-items-center  px-4  ">
        <ChipGroup defaultValue="option-one" className="">
          <div className="gap-2 flex justify-start overflow-x-scroll scroll-smooth scrollbar-hide py-2">
            {filterOptions.map((option) => (
              <div
                key={option.key}
                className="flex justify-center items-center border-gray-300 border-1 rounded-lg gap-2"
              >
                <div
                  className={`flex px-3 py-2 gap-2 justify-center items-center cursor-pointer rounded-lg ${
                    filter === option.key
                      ? "bg-green-50 border-green-800"
                      : "white"
                  }`}
                  onClick={() => handleClick(option.key)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill={filter === option.key ? "#1DAB61" : "text-[#77787A]"}
                    viewBox="0 0 256 256"
                    className={`${filter === option.key ? "block" : "hidden"}`}
                  >
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                  <label
                    htmlFor={`option-${option.key}`}
                    className={`text-[14px] font-semibold leading-5 ${
                      filter === option.key
                        ? "text-[#1DAB61]"
                        : "text-[#77787A]"
                    }`}
                  >
                    {option.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </ChipGroup>
      </div>

      {/* chip section end  */}

      {/* body menu  */}
      <div className=" w-full grid grid-cols-1 justify-items-center   pb-24 overflow-x-auto scrollbar-hide scroll-smooth">
        {filteredData.map((item: any, index: any) => (
          <div
            key={index}
            className={`w-[24.375rem] h-[7.375rem] border-b-2 p-6 px-4 gap-4 flex flex-col`}
          >
            <div className="w-[22.375rem] h-[1.375rem] flex gap-2">
              <div className="w-[3.375rem] h-[1.25rem] pt-0.5 px-2 pb-0 flex justify-center items-center">
                <div className="w-[2.375rem] h-[1.25rem] flex justify-center items-center">
                  <p className="text-[1rem] font-medium">{item.id}</p>
                </div>
              </div>
              <div className="w-[18.5rem] h-[1.25rem] flex justify-start items-center">
                <p className="text-[1rem] font-medium text-gray-900">
                  {item.companyName}
                </p>
              </div>
              <div className="w-[3.8125rem] h-[1.25rem] flex justify-center items-center font-semibold">
                <p className="text-[0.875rem] text-[#1DAB61]">{item.status}</p>
              </div>
            </div>
            <div className="w-[22.375rem] h-[2rem] flex justify-between items-center">
              <div className="w-[7.375rem] h-[2rem] flex justify-between items-center gap-2">
                <div className="w-[4.9375rem] h-[2rem] px-2 flex justify-center items-center">
                  <div className="w-[2.6875rem] h-[1.25rem]">
                    <p className="text-[0.875rem] font-normal text-[#77787A]">
                      {item.amount}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="w-0.5 h-5 bg-gray-200"></p>
                </div>
                <div className="w-[5.375rem] h-[2rem] flex justify-center items-center">
                  <div className="w-[3.125rem] h-[1.375rem]">
                    <div className="flex justify-between items-center">
                      <p className="text-[0.875rem] text-[#77787A] font-normal">
                        {item.quotes}
                      </p>
                      <p className="text-[0.875rem] text-[#77787A] font-normal">
                        Quote
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[5.625rem] h-[1.375rem] flex justify-center items-center">
                <div>
                  <p className="text-[0.875rem] font-normal text-gray-700 flex justify-center items-center">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* bottom navigation  */}

      </SecondaryLayout>
    // </div>
  );
}
