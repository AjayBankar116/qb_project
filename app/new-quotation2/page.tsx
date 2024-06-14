"use client";
import * as React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";

export default function NewQuotationEmpty() {
  const [quote, setQuote] = useState(false);
  const [details, setDetails] = useState(false);
  const [share, setShare] = useState(false);

  const handleQuoteClick = () => {
    setQuote(true);
    setDetails(false);
    setShare(false);
  };

  const handleDetailsClick = () => {
    setDetails(true);
    setQuote(false);
    setShare(false);
  };

  const handleShareClick = () => {
    setShare(true);
    setDetails(false);
    setQuote(false);
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-4 w-full">
      {/* header section  */}
      <header className="w-full h-[64px] bg-white flex sticky top-0  justify-center items-center px-4 py-6  shadow-md blur-10 shadow-spread-3  ">
        <div className=" w-[342px] h-[28px]  flex gap-3">
          <div className=" w-[24px] h-[24px]  flex justify-center items-center">
            <svg
              color="#1C1E21"
              width="20px"
              height="16.5px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="#000000"
              />
            </svg>
          </div>

          <div className=" w-[109px] h-[28px] leading-7  flex justify-center items-center">
            <p className=" text-[22px] font-normal">New Quote</p>
          </div>
        </div>
      </header>

      {/* body section  */}
      <section className=" pb-24 overflow-x-auto scrollbar-hide scroll-smooth justify-center items-center   w-full  gap-2.5  flex flex-col ">
        <div className=" w-[358px] h-[78px]  gap-1 ">
          <div className=" w-[358px] h-[24px]">
            <p className=" font-semibold text-[18px] text-[#1C1E21]  leading-6">
              Customer
            </p>
          </div>
          <div className=" w-[358px] h-[52px] rounded-xl gap-1">
            <Select>
              <SelectTrigger className="w-[358px] h-[52px] rounded-xl">
                <SelectValue placeholder="Select Customer" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className=" w-[358px] h-[464px] flex flex-col  border-1 rounded-2xl py-0 px-0 pb-4 gap-4">
          <div className=" w-[358px] h-[64px]  gap-2 px-4 py-0   flex justify-between items-center">
            <div className=" w-[261px] h-[64px] flex justify-start items-center py-4  gap-2.5 ">
              <div className=" w-[56px] h-[28px]  font-normal text-[22px] flex justify-start items-center leading-7">
                Items
              </div>
            </div>

            <div className=" w-[89px] h-[52px]  flex justify-end items-center gap-2 px-4 py-2 rounded-large ">
              <Link
                href="/"
                className=" font-medium text-[16px] leading-6 text-[#0373E9]"
              >
                New
              </Link>
              <Link href="/" className=" ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0373E9"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className=" overflow-x-auto scrollbar-hide scroll-smooth">
            <div className=" w-[358px] h-[100px] flex justify-center items-center gap-4  border-t-0 border-r-0 border-b-1 border-l-0">
              <div className=" w-[250px] h-[68px]  gap-2 flex flex-col justify-center items-center">
                <div className=" w-[250px] h-[40px] ">
                  <p className=" font-medium text-[16px] leading-5 tet-[#1C1E21]">
                    AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts DC
                  </p>
                </div>
                <div className=" w-[250px] h-[20px]  flex justify-start items-center">
                  <p className=" font-medium text-[16px] leading-5 text-[#1C1E21] ">
                    6,175{" "}
                  </p>
                </div>
              </div>

              <div className=" w-[60px] h-[68px]  flex flex-col justify-center items-center gap-1">
                <div className=" w-[60px] h-[40px] border-1 rounded-lg gap-1 flex justify-center items-center">
                  1
                </div>
                <div className=" w-[42px] h-[20px] flex justify-center items-center">
                  <p>6,175</p>
                </div>
              </div>
            </div>

            <div className=" w-[358px] h-[100px] flex justify-center items-center gap-4  border-t-0 border-r-0 border-b-1 border-l-0">
              <div className=" w-[250px] h-[68px]  gap-2 flex flex-col justify-center items-center">
                <div className=" w-[250px] h-[40px] ">
                  <p className=" font-medium text-[16px] leading-5 tet-[#1C1E21]">
                    AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts DC
                  </p>
                </div>
                <div className=" w-[250px] h-[20px]  flex justify-start items-center">
                  <p className=" font-medium text-[16px] leading-5 text-[#1C1E21] ">
                    6,175{" "}
                  </p>
                </div>
              </div>

              <div className=" w-[60px] h-[68px]  flex flex-col justify-center items-center gap-1">
                <div className=" w-[60px] h-[40px] border-1 rounded-lg gap-1 flex justify-center items-center">
                  1
                </div>
                <div className=" w-[42px] h-[20px] flex justify-center items-center">
                  <p>6,175</p>
                </div>
              </div>
            </div>

            <div className=" w-[358px] h-[100px] flex justify-center items-center gap-4  border-2 border-t-0 border-r-0 border-b-1 border-l-0">
              <div className=" w-[250px] h-[68px] gap-2 flex flex-col justify-center items-center">
                <div className=" w-[250px] h-[40px] ">
                  <p className=" font-medium text-[16px] leading-5 tet-[#1C1E21]">
                    AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts DC
                  </p>
                </div>
                <div className=" w-[250px] h-[20px]  flex justify-start items-center">
                  <p className=" font-medium text-[16px] leading-5 text-[#1C1E21] ">
                    6,175{" "}
                  </p>
                </div>
              </div>

              <div className=" w-[60px] h-[68px]  flex flex-col justify-center items-center gap-1">
                <div className=" w-[60px] h-[40px] border-1 rounded-lg gap-1 flex justify-center items-center">
                  1
                </div>
                <div className=" w-[42px] h-[20px]  flex justify-center items-center">
                  <p>6,175</p>
                </div>
              </div>
            </div>

            <div className=" w-[358px] h-[100px] flex justify-center items-center gap-4 border-t-0 border-r-0 border-b-1 border-l-0">
              <div className=" w-[250px] h-[68px]  gap-2 flex flex-col justify-center items-center">
                <div className=" w-[250px] h-[40px] ">
                  <p className=" font-medium text-[16px] leading-5 tet-[#1C1E21]">
                    AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts DC
                  </p>
                </div>
                <div className=" w-[250px] h-[20px]  flex justify-start items-center">
                  <p className=" font-medium text-[16px] leading-5 text-[#1C1E21] ">
                    6,175{" "}
                  </p>
                </div>
              </div>

              <div className=" w-[60px] h-[68px] flex flex-col justify-center items-center gap-1">
                <div className=" w-[60px] h-[40px] border-1 rounded-lg gap-1 flex justify-center items-center">
                  1
                </div>
                <div className=" w-[42px] h-[20px]  flex justify-center items-center">
                  <p>6,175</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className="w-[123px] h-[40px]   flex justify-center items-center  bg-[#F0F9FF] rounded-full">
              <div className=" flex justify-center items-center  ">
                <div className=" w-[67px] h-[24px]">
                  <Link href="/">
                    <button className=" font-medium text-[16px] leading-6 text-[#0373E9]">
                      Add Item
                    </button>
                  </Link>
                </div>
                <div className=" w-[16px] h-[16px] flex justify-center items-center mt-1.5">
                  <Link href="/" className=" ">
                    <button className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#0373E9"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[390px] h-[54px]   flex justify-center items-center ">
          <div className=" w-[358px] h-[54px]  flex justify-end items-center">
            <Button
              variant={"custom"}
              className="  w-[74px] h-[54px] rounded-2xl px-4 py-2 flex justify-center items-center gap-1 bg-[#1DAB61]  text-white"
            >
              Next
            </Button>
          </div>
        </div>
      </section>


      {/* bottom navigation  */}
      <nav className=" w-full h-[80px] fixed bottom-0   flex justify-center items-center gap-2.5 shadow-2xl bg-white ">
        <div className=" w-[358px] h-[40px]  rounded-xl flex justify-center items-center">
          <Link
            onClick={handleQuoteClick}
            href="/new-quotation2"
            className={` ${
              quote ? "  border-b-2 border-[#1DAB61]" : " border-[#77787A]"
            } w-[103.33px] h-[40px]  flex justify-center items-center gap-2`}
          >
            <div
              className={` ${
                quote
                  ? "border-[#1DAB61] text-green-800 "
                  : "border-[#77787A] text-[#77787A]"
              } w-[24px] h-[24px]  border-1 rounded-full flex justify-center items-center gap-1 font-semibold text-[14px]  `}
            >
              1
            </div>
            <div
              className={` ${
                quote ? "text-green-800 " : "text-[#77787A]"
              } w-[39px] h-[22px] text-[14px]  font-semibold leading-5 `}
            >
              Quote
            </div>
          </Link>
          <div className=" w-[24px] h-[40px] px-0 py-1 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#77787A"
              viewBox="0 0 256 256"
            >
              <path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path>
            </svg>
          </div>
          <Link
            onClick={handleDetailsClick}
            href="/new-quotation2"
            className={` ${
              details ? "  border-b-2 border-[#1DAB61]" : " border-[#77787A]"
            } w-[103.33px] h-[40px]  flex justify-center items-center gap-2`}
          >
            <div
              className={` ${
                details
                  ? "border-[#1DAB61] text-green-800 "
                  : "border-[#77787A] text-[#77787A]"
              }  w-[24px] h-[24px]    border-1 rounded-full flex justify-center items-center gap-1 font-semibold`}
            >
              2
            </div>
            <div
              className={`  ${
                details ? "text-green-800 " : "text-[#77787A]"
              } w-auto h-[22px] text-[14px] text-[#77787A]  font-semibold leading-5 `}
            >
              Details
            </div>
          </Link>
          <div className=" w-[24px] h-[40px] px-0 py-1 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#77787A"
              viewBox="0 0 256 256"
            >
              <path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path>
            </svg>
          </div>
          <Link
            onClick={handleShareClick}
            href="/new-quotation2"
            className={` ${
              share ? "  border-b-2 border-[#1DAB61]" : " border-[#77787A]"
            }  w-[103.33px] h-[40px]  flex justify-center items-center gap-2`}
          >
            <div
              className={`  ${
                share
                  ? "border-[#1DAB61] text-green-800 "
                  : "border-[#77787A] text-[#77787A]"
              } w-[24px] h-[24px] border-1 rounded-full flex justify-center items-center gap-1 font-semibold`}
            >
              3
            </div>
            <div
              className={` ${
                share ? "text-green-800 " : "text-[#77787A]"
              } w-auto  h-[22px] text-[14px] text-[#77787A]  font-semibold leading-5 `}
            >
              Share
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
