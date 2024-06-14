"use client";
import * as React from "react";
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

export default function NewQuotationPage2() {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className=" flex flex-col justify-center items-center gap-4 w-full">

      {/* header section  */}
      <header className="w-full h-[64px] flex justify-center items-center px-4 py-6  top-0 sticky bg-white shadow-md blur-10 shadow-spread-3  ">
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
      <section  className=" w-full h-auto pb-40   flex flex-col items-center justify-center gap-2.5">
        <div className=" w-[358px] h-[40px]  px-0 py-2  gap-2">
          <p className=" font-semibold text-[18px] left-6 tracking-tight ">
            Other Details
          </p>
        </div>

        <div className=" w-[358px] h-auto  gap-4 flex flex-col ">
          <div className=" w-[358px] h-[80px] gap-1">
            <div className=" w-[358px] h-[24px] ">
              <p className=" font-medium text-[16px] text-[#1C1E21]  leading-6">
                Due Date
              </p>
            </div>
            <div className=" w-[358px] h-[52px]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[358px] h-[52px] justify-start text-left font-normal rounded-xl",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-6 w-6 text-[#77787A]" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span className=" font-normal text-[14px] leading-5 tracking-wide text-[#77787A]">
                        DD/MM/YY
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className=" w-[358px] h-[80px]  gap-1">
            <div className=" w-[358px] h-[24px]">
              <p className=" font-medium text-[16px] text-[#1C1E21]  leading-6">
                Status
              </p>
            </div>
            <div className=" w-[358px] h-[52px] rounded-xl">
              <Select>
                <SelectTrigger className="w-[358px] h-[52px] rounded-xl">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full flex justify-center items-center  gap-2">
          <div className="w-[22.375rem]">
            <div className="grid w-full h-auto gap-1">
              <Label
                htmlFor="message"
                className="font-medium text-[1rem] text-[#1C1E21] leading-6"
              >
                Term and Conditions
              </Label>
              <Textarea placeholder="" id="message" className=" w-full h-24" />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center  gap-2">
          <div className="w-[22.375rem]">
            <div className="grid w-full h-auto gap-1">
              <Label
                htmlFor="message"
                className="font-medium text-[1rem] text-[#1C1E21] leading-6"
              >
                Internal Notes
              </Label>
              <Textarea placeholder="" id="message" className=" w-full h-24" />
            </div>
          </div>
        </div>
        </div>
      </section>
     

     {/* bottom navigation  */}
      <nav className="  w-full h-[130px] pt-4 pr-0 pb-0 pl-0 rounded-tl-2xl rounded-tr-2xl  blur-10 shadow-spread-3 shadow-medium   flex flex-col justify-center items-center fixed bg-white left-0 bottom-0 border-1">
        <div className="  gap-4 h-[96px] w-full flex flex-col justify-center items-center">
          <div className=" w-[358px]  h-[28px]  px-4 py-0 flex justify-between items-center">
            <div>
              <p className=" font-normal text-[14px] leading-5 text-[#494B4D]">
                Total amount
              </p>
            </div>
            <div className="font-normal text-[22px] leading-7 text-[#1C1E21]">
              {" "}
              ₹ 12,350
            </div>
          </div>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full w-[358px]"
          >
            Next
          </Button>
        </div>
      </nav>
    </div>
  );
}






