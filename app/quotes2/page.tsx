"use client";

import { Label } from "@/components/ui/label";
import { ChipGroup, ChipGroupItem } from "@/components/ui/radio-group";

import SearchField from "@/components/SearchField";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useState } from "react";
import Link from "next/link";

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

export default function Quotes() {
  const [isClicked, setIsClicked] = useState(false);
  const [isRejectedClicked, setIsRejectedClicked] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleClick = () => {
    setIsClicked(true);
    setIsRejectedClicked(false);
    setIsDraft(false);
    setIsSent(false)
    setIsPending(false)

  };
  const handleRejectedClick = () => {
    setIsRejectedClicked(true);
    setIsClicked(false);
    setIsSent(false);
    setIsDraft(false);
    setIsPending(false);
   
  };

  


  
  const handleDraftClick = () => {
    setIsDraft(true);
    setIsRejectedClicked(false);
    setIsClicked(false);
    setIsSent(false)
    setIsPending(false)

  };

  const handleSentClick = () => {
    setIsSent(true)
    setIsDraft(false);
    setIsRejectedClicked(false);
    setIsClicked(false);
    setIsPending(false)

  }

  const handlePendingClick = () => {

    setIsPending(true)
    setIsSent(false)
    setIsDraft(false);
    setIsRejectedClicked(false);
    setIsClicked(false);
  }
 
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <div className="w-[390px] h-[64px] flex justify-center items-center  shadow-md blur-10 shadow-spread-3  ">
        <div className="flex justify-center items-center gap-2 ">
          <div className="w-[310px] h-[26px] flex justify-start items-center">
            <svg
              width="117"
              height="26"
              viewBox="0 0 211 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7468 34.4955C7.69758 34.4955 0.571899 27.6321 0.571899 18.1021C0.571899 8.57202 7.69758 1.79607 16.7468 1.79607C25.8397 1.79607 32.9653 8.57202 32.9653 18.1021C32.9653 24.1349 30.1238 29.1185 25.7085 31.9163L30.9544 41.7961H22.6921L18.6703 34.4081C18.0145 34.4518 17.4025 34.4955 16.7468 34.4955ZM16.7468 27.1075C21.6867 27.1075 24.4408 23.042 24.4408 18.1021C24.4408 13.1622 21.6867 9.18404 16.7468 9.18404C11.8069 9.18404 9.05277 13.1622 9.05277 18.1021C9.05277 23.042 11.8069 27.1075 16.7468 27.1075Z"
                fill="#1DAB61"
              />
              <path
                d="M49.0473 23.7414V10.3207H56.5227V33.8398H49.6593V31.3043C48.3479 33.0529 45.8561 34.2769 43.102 34.2769C38.4244 34.2769 34.8834 31.348 34.8834 25.1403V10.3207H42.3588V23.7414C42.3588 26.3207 43.6265 27.5884 45.7249 27.5884C47.2112 27.5884 49.0473 26.4081 49.0473 23.7414Z"
                fill="#1DAB61"
              />
              <path
                d="M70.6675 34.2769C63.7167 34.2769 58.3834 28.8125 58.3834 22.0802C58.3834 15.348 63.7167 9.8835 70.6675 9.8835C77.6183 9.8835 82.9517 15.348 82.9517 22.0802C82.9517 28.8125 77.6183 34.2769 70.6675 34.2769ZM70.6675 27.5884C72.9845 27.5884 75.1703 25.7524 75.1703 22.0802C75.1703 18.4081 72.9845 16.6157 70.6675 16.6157C68.3506 16.6157 66.1648 18.4081 66.1648 22.0802C66.1648 25.7524 68.3506 27.5884 70.6675 27.5884Z"
                fill="#1DAB61"
              />
              <path
                d="M100.205 26.4955V33.0092C98.5442 33.9272 96.9705 34.2769 94.8721 34.2769C89.5825 34.2769 86.4787 31.1294 86.4787 25.7524V16.8343H82.1071V10.3207H86.4787V3.41355H93.9541V10.3207H100.38V16.8343H93.9541V24.0037C93.9541 26.2769 94.9158 27.3261 96.9705 27.3261C98.1945 27.3261 99.3748 27.0201 100.205 26.4955Z"
                fill="#1DAB61"
              />
              <path
                d="M112.386 34.2332C105.13 34.2332 100.277 29.337 100.277 22.0365C100.277 14.9983 105.348 9.8835 112.343 9.8835C120.124 9.8835 125.326 16.2223 123.971 23.96H108.015C108.408 26.9327 109.807 28.419 112.212 28.419C114.31 28.419 115.709 27.5447 116.365 25.8398H123.84C122.397 31.2168 118.244 34.2332 112.386 34.2332ZM112.168 15.3917C109.938 15.3917 108.627 16.6595 108.102 19.2824H115.971C115.884 16.9217 114.397 15.3917 112.168 15.3917Z"
                fill="#1DAB61"
              />
              <path
                d="M151.329 24.3972C151.329 30.2988 146.958 33.8398 139.657 33.8398H126.674V2.4518H139.264C146.127 2.4518 150.411 5.4682 150.411 10.9327C150.411 13.6868 148.969 15.8289 146.346 17.4026C149.537 18.7578 151.329 21.0748 151.329 24.3972ZM138.608 8.96547H134.149V14.3862H138.608C141.362 14.3862 142.63 13.337 142.63 11.6321C142.63 10.0146 141.362 8.96547 138.608 8.96547ZM139.002 20.8999H134.149V27.3261H139.002C142.105 27.3261 143.548 26.1021 143.548 24.0911C143.548 22.1677 142.105 20.8999 139.002 20.8999Z"
                fill="#1DAB61"
              />
              <path
                d="M160.781 21.4682V33.8398H153.305V2.4518H160.781V12.8562C162.486 11.0201 164.191 9.8835 167.163 9.8835C171.797 9.8835 175.076 12.9873 175.076 18.7141V33.8398H167.601V21.2059C167.601 18.2332 166.551 16.6157 164.278 16.6157C162.442 16.6157 160.781 17.9272 160.781 21.4682Z"
                fill="#1DAB61"
              />
              <path
                d="M188.867 34.2332C181.61 34.2332 176.758 29.337 176.758 22.0365C176.758 14.9983 181.829 9.8835 188.823 9.8835C196.605 9.8835 201.807 16.2223 200.452 23.96H184.495C184.889 26.9327 186.288 28.419 188.692 28.419C190.79 28.419 192.189 27.5447 192.845 25.8398H200.321C198.878 31.2168 194.725 34.2332 188.867 34.2332ZM188.648 15.3917C186.419 15.3917 185.107 16.6595 184.583 19.2824H192.452C192.364 16.9217 190.878 15.3917 188.648 15.3917Z"
                fill="#1DAB61"
              />
              <path
                d="M210.979 4.85617C210.979 7.30426 209.012 9.09661 206.171 9.09661C203.329 9.09661 201.362 7.30426 201.362 4.85617C201.362 2.36437 203.329 0.572021 206.171 0.572021C209.012 0.572021 210.979 2.36437 210.979 4.85617ZM209.974 10.3207V32.6595C209.974 39.8726 206.171 42.7141 201.143 42.7141C199.963 42.7141 198.783 42.6267 197.646 42.2332V35.195C198.258 35.5884 199.176 35.7633 200.182 35.7633C201.493 35.7633 202.498 34.9327 202.498 32.4409V10.3207H209.974Z"
                fill="#1DAB61"
              />
            </svg>
          </div>
          <div className="w-[32px] h-[32px] flex justify-center items-center">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 12C18.5 13.0878 18.1774 14.1512 17.5731 15.0556C16.9687 15.9601 16.1098 16.6651 15.1048 17.0813C14.0998 17.4976 12.9939 17.6065 11.927 17.3943C10.8601 17.1821 9.88011 16.6583 9.11092 15.8891C8.34173 15.1199 7.81791 14.1399 7.60569 13.073C7.39347 12.0061 7.50239 10.9002 7.91867 9.89524C8.33495 8.89025 9.0399 8.03127 9.94437 7.42692C10.8488 6.82257 11.9122 6.5 13 6.5C14.4582 6.50165 15.8562 7.08165 16.8873 8.11274C17.9184 9.14383 18.4984 10.5418 18.5 12ZM26 13C26 15.5712 25.2376 18.0846 23.8091 20.2224C22.3807 22.3603 20.3503 24.0265 17.9749 25.0104C15.5995 25.9944 12.9856 26.2518 10.4638 25.7502C7.94208 25.2486 5.6257 24.0105 3.80762 22.1924C1.98953 20.3743 0.751405 18.0579 0.249797 15.5362C-0.251811 13.0144 0.0056327 10.4006 0.989572 8.02512C1.97351 5.64968 3.63975 3.61935 5.77759 2.1909C7.91543 0.762437 10.4288 0 13 0C16.4467 0.00363977 19.7512 1.37445 22.1884 3.81163C24.6256 6.24882 25.9964 9.5533 26 13ZM24 13C23.9984 11.5194 23.6982 10.0544 23.1174 8.69245C22.5366 7.33054 21.6871 6.09974 20.6198 5.07367C19.5524 4.04759 18.289 3.24732 16.9053 2.7207C15.5215 2.19408 14.0457 1.95194 12.5663 2.00875C6.67876 2.23625 1.98376 7.14 2.00001 13.0312C2.00565 15.7132 2.99478 18.2998 4.78001 20.3013C5.50703 19.2468 6.43056 18.3423 7.50001 17.6375C7.59119 17.5773 7.69958 17.5486 7.80862 17.5558C7.91765 17.563 8.02132 17.6058 8.10376 17.6775C9.46273 18.8529 11.1995 19.4998 12.9963 19.4998C14.793 19.4998 16.5298 18.8529 17.8888 17.6775C17.9712 17.6058 18.0749 17.563 18.1839 17.5558C18.2929 17.5486 18.4013 17.5773 18.4925 17.6375C19.5633 18.342 20.4881 19.2464 21.2163 20.3013C23.0103 18.2925 24.0013 15.6932 24 13Z"
                fill="#06471E"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=" w-[358px] h-[52px]  flex justify-center items-center    ">
        <SearchField searchIcon={<SearchIcon />} />
      </div>

      <div className=" gap-2  w-[390px] h-[48px] flex justify-start items-center px-4 py-2 ">
        <ChipGroup defaultValue="option-one" className=" ">
          <div className="  gap-2 flex justify-start overflow-x-scroll scroll-smooth scrollbar-hide  py-2  ">
          <div className="flex justify-center items-center border-gray-300 border-1 rounded-lg gap-2">
              <div
                className={`flex px-3 py-2 gap-2 justify-center items-center cursor-pointer ${
                  isSent ? "bg-blue-50 border-red-700" : "white"
                }`}
                onClick={handleSentClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill={isSent ? "#4f46e5" : "text-[#77787A]"}
                  viewBox="0 0 256 256"
                  className={`${isSent ? "block" : "hidden"}`}
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <label
                  htmlFor="option-rejected"
                  className={`${
                    isSent ? "text-[#4f46e5]" : "text-[#77787A]"
                  } text-[14px] font-semibold leading-5`}
                >
                  Sent
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center border-gray-300 border-1 rounded-lg gap-2">
              <div
                className={`flex px-3 py-2 gap-2 justify-center items-center cursor-pointer ${
                  isDraft ? "bg-red-50 border-red-700" : "white"
                }`}
                onClick={handleDraftClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill={isDraft ? "#dc2626" : "text-[#77787A]"}
                  viewBox="0 0 256 256"
                  className={`${isDraft ? "block" : "hidden"}`}
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <label
                  htmlFor="option-rejected"
                  className={`${
                    isDraft ? "text-[#dc2626]" : "text-[#77787A]"
                  } text-[14px] font-semibold leading-5`}
                >
                  Draft
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center border-gray-300 border-1   rounded-lg gap-2">
              <div
                className={`flex px-3 py-2 gap-2 justify-center items-center cursor-pointer    ${
                  isClicked ? "bg-green-50 border-green-800 " : "white"
                }`}
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill={isClicked ? "#1DAB61 " : "text-[#77787A]"}
                  viewBox="0 0 256 256"
                  className={`${isClicked ? "block" : "hidden"}`}
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <label
                  htmlFor="option-three"
                  className={`${
                    isClicked ? "text-[#1DAB61]" : "text-[#77787A]"
                  }  text-[14px] font-semibold leading-5 `}
                >
                  Accepted
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center border-gray-300 border-1 rounded-lg gap-2">
              <div
                className={`flex px-3 py-2 gap-2 justify-center items-center cursor-pointer ${
                  isRejectedClicked ? "bg-red-50 border-red-700" : "white"
                }`}
                onClick={handleRejectedClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill={isRejectedClicked ? "#dc2626" : "text-[#77787A]"}
                  viewBox="0 0 256 256"
                  className={`${isRejectedClicked ? "block" : "hidden"}`}
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <label
                  htmlFor="option-rejected"
                  className={`${
                    isRejectedClicked ? "text-[#dc2626]" : "text-[#77787A]"
                  } text-[14px] font-semibold leading-5`}
                >
                  Rejected
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center border-gray-300 border-1 rounded-lg gap-2">
              <div
                className={`flex px-3 py-2 gap-2 justify-center items-center cursor-pointer ${
                  isPending ? "bg-blue-50 border-red-700" : "white"
                }`}
                onClick={handlePendingClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill={isPending ? "#4f46e5" : "text-[#77787A]"}
                  viewBox="0 0 256 256"
                  className={`${isPending ? "block" : "hidden"}`}
                >
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
                <label
                  htmlFor="option-rejected"
                  className={`${
                    isPending ? "text-[#4f46e5]" : "text-[#77787A]"
                  } text-[14px] font-semibold leading-5`}
                >
                Pending
                </label>
              </div>
            </div>
           
          </div>
        </ChipGroup>
      </div>

      <div className={` ${isClicked ? 'block' : 'hidden'} w-[390px] h-[118px] border-b-2 p-6 px-4 gap-4 flex flex-col `}>
        <div className="w-[358px] h-[22px]  flex  gap-2  ">
          <div className="w-[54px] h-[20px]  pt-0.5 px-2 pb-0 flex justify-center items-center   ">
            <div className=" w-[38px] h-[20px] flex justify-center items-center ">
              <p className=" text-[16px] font-medium">#442</p>
            </div>
          </div>

          <div className="w-[296px] h-[20px]   flex justify-start  items-center">
            <p className=" text-[16px] font-medium text-gray-900">
              Akash Tech Pvt Ltd
            </p>
          </div>

          <div className=" w-[61px] h-[20px]  flex justify-center items-center font-semibold">
            <p className=" text-[14px] text-[#1DAB61]">Accepted</p>
          </div>
        </div>

        <div className="w-[358px] h-[32px]  flex   justify-between items-center  ">
          <div className=" w-[118px] h-[32px] flex justify-between items-center gap-2   ">
            <div className=" w-[79px] h-[32px]   px-2 flex justify-center items-center ">
              <div className=" w-[43px] h-[20px] ">
                <p className=" text-[14px] font-normal text-[#77787A]">
                  ₹45,005
                </p>
              </div>
            </div>

            <div className=" flex justify-center items-center ">
              <p className=" w-0.5 h-5  bg-gray-200   "></p>
            </div>

            <div className=" w-[86px] h-[32px]   flex justify-center items-center">
              <div className="w-[50px] h-[22px]  ">
                <div className="flex justify-between items-center">
                  <p className=" text-[14px] text-[#77787A] font-normal">1</p>
                  <p className=" text-[14px] text-[#77787A] font-normal">
                    Quote
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[90px] h-[22px]   flex justify-center items-center ">
            <div>
              <p
                className={` text-[14px] font-normal  text-gray-700 flex justify-center items-center`}
              >
                {`${date} ${month} ${year}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[390px] h-[80px]  fixed bottom-0 flex   shadow-large blur-10 shadow-spread-3 ">
        <div className=" w-[179px] h-[80px]  flex justify-center items-center">
          <Link href="/quotes">
            <div className=" w-[87.5px] h-[80px]  flex justify-center items-center flex-col gap-1  ">
              <div className=" w-[64px] h-[32px]  rounded-2xl flex justify-center items-center bg-green-50 ">
                <div className=" w-[24px] h-[24px]  flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill=""
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path>
                  </svg>
                </div>
              </div>

              <div className=" w-[87.5px] h-[16px]  flex justify-center items-center">
                <p className=" text-[12px] font-semibold text-center text-green-900">
                  Quotes
                </p>
              </div>
            </div>
          </Link>

          <Link href="/customers">
            <div className="  w-[87px] h-[80px] flex flex-col justify-center items-center gap-1">
              <div className="   w-[64px] h-[32px] flex justify-center items-center">
                <div className=" w-[32px] h-[32px]  flex justify-center items-center">
                  <div className=" w-[24px] h-[24px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.05 14.1625L7.04997 14.1625C6.9958 14.2349 6.92788 14.2958 6.85012 14.3419C6.77236 14.388 6.68628 14.4183 6.59681 14.4311C6.50733 14.4438 6.41621 14.4388 6.32866 14.4163C6.24112 14.3939 6.15887 14.3543 6.08661 14.3C5.94088 14.1905 5.84461 14.0276 5.81899 13.8471C5.79336 13.6666 5.84048 13.4833 5.94997 13.3375L5.95007 13.3374C6.6092 12.455 7.4881 11.7608 8.49916 11.3239L8.58791 11.2856L8.51652 11.2204C7.96737 10.719 7.58262 10.0634 7.41279 9.33941C7.24295 8.61547 7.29594 7.85709 7.56482 7.16381C7.8337 6.47052 8.3059 5.87473 8.91944 5.45461C9.53299 5.03449 10.2592 4.80968 11.0028 4.80968C11.7464 4.80968 12.4726 5.03449 13.0862 5.45461C13.6997 5.87473 14.1719 6.47052 14.4408 7.16381C14.7097 7.85709 14.7627 8.61547 14.5928 9.33941C14.423 10.0634 14.0383 10.719 13.4891 11.2204L13.4178 11.2855L13.5064 11.3239C14.5154 11.7616 15.3923 12.4557 16.0499 13.3374L16.05 13.3375C16.1042 13.4097 16.1436 13.4919 16.166 13.5794C16.1884 13.6668 16.1934 13.7579 16.1806 13.8472C16.1678 13.9366 16.1376 14.0226 16.0916 14.1003C16.0456 14.178 15.9847 14.2458 15.9125 14.3C15.8403 14.3542 15.7581 14.3936 15.6706 14.416C15.5832 14.4384 15.4921 14.4434 15.4028 14.4306C15.3134 14.4178 15.2274 14.3876 15.1497 14.3416C15.072 14.2956 15.0042 14.2347 14.95 14.1625C14.4901 13.5493 13.8937 13.0516 13.2081 12.7088C12.5225 12.366 11.7665 12.1875 11 12.1875C10.2335 12.1875 9.47748 12.366 8.79188 12.7088C8.10628 13.0516 7.50991 13.5493 7.05 14.1625ZM2.75 4.0625H2.8125V4V1.75C2.8125 1.36875 2.96395 1.00312 3.23353 0.733534C3.50312 0.46395 3.86875 0.3125 4.25 0.3125H17.75C18.1312 0.3125 18.4969 0.46395 18.7665 0.733534C19.036 1.00312 19.1875 1.36875 19.1875 1.75V18.25C19.1875 18.6312 19.036 18.9969 18.7665 19.2665C18.4969 19.536 18.1312 19.6875 17.75 19.6875H4.25C3.86875 19.6875 3.50312 19.536 3.23353 19.2665C2.96395 18.9969 2.8125 18.6312 2.8125 18.25V16V15.9375H2.75H1.25C1.06766 15.9375 0.892795 15.8651 0.763864 15.7361C0.634933 15.6072 0.5625 15.4323 0.5625 15.25C0.5625 15.0677 0.634933 14.8928 0.763864 14.7639C0.892795 14.6349 1.06766 14.5625 1.25 14.5625H2.75H2.8125V14.5V10.75V10.6875H2.75H1.25C1.06766 10.6875 0.892795 10.6151 0.763864 10.4861C0.634933 10.3572 0.5625 10.1823 0.5625 10C0.5625 9.81766 0.634933 9.6428 0.763864 9.51386C0.892795 9.38493 1.06766 9.3125 1.25 9.3125H2.75H2.8125V9.25V5.5V5.4375H2.75H1.25C1.06766 5.4375 0.892795 5.36507 0.763864 5.23614C0.634933 5.1072 0.5625 4.93234 0.5625 4.75C0.5625 4.56766 0.634933 4.3928 0.763864 4.26386C0.892795 4.13493 1.06766 4.0625 1.25 4.0625H2.75ZM17.75 18.3125H17.8125V18.25V1.75V1.6875H17.75H4.25H4.1875V1.75V18.25V18.3125H4.25H17.75ZM9.07723 7.21524C8.82313 7.59553 8.6875 8.04263 8.6875 8.5C8.6875 9.11331 8.93114 9.70151 9.36482 10.1352C9.79849 10.5689 10.3867 10.8125 11 10.8125C11.4574 10.8125 11.9045 10.6769 12.2848 10.4228C12.665 10.1687 12.9614 9.80751 13.1365 9.38496C13.3115 8.9624 13.3573 8.49743 13.2681 8.04885C13.1788 7.60027 12.9586 7.18822 12.6352 6.86482C12.3118 6.54141 11.8997 6.32116 11.4511 6.23193C11.0026 6.14271 10.5376 6.1885 10.115 6.36353C9.69249 6.53856 9.33133 6.83496 9.07723 7.21524Z"
                        fill="#7C837E"
                        stroke="#7C837E"
                        stroke-width="0.125"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <div className=" w-[87.5px] h-[16px]  flex justify-center items-center">
                  <p className=" text-[12px] font-semibold text-center text-[#7C837E]">
                    Customer
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <Link href="/signup">
          <div className=" w-[211px] h-[80px]  flex justify-end items-center  ">
            <div className=" w-[56px] h-[56px]  mr-3 flex justify-center items-center rounded-2xl bg-green-700 ">
              <div className="w-[24px] h-[24px]  flex justify-center items-center ">
                <div className=" w-[16px] h-[16px] flex justify-center items-center">
                  <span className=" text-[30px] text-white">+</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
