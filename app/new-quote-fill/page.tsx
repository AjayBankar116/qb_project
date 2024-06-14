import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewQuotationFill() {
  return (
    <div className=" grid grid-cols-1 justify-center items-center gap-4 w-full">
      {/* header section  */}
      <header className="w-full h-[4rem] grid place-content-center  px-[1rem] py-[1.5rem] top-0 sticky bg-white shadow-md blur-10 shadow-spread-3">
        <div className="w-[21.375rem] h-[1.75rem] grid grid-cols-[1.5rem_auto] gap-[0.75rem] items-center">
          <div className="w-[1.5rem] h-[1.5rem] gird place-content-center">
            <svg
              color="#1C1E21"
              width="1.25rem"
              height="1.03125rem"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="#000000"
              />
            </svg>
          </div>
          <div className="w-[7.9375rem] h-[1.75rem] leading-[1.75rem] gird place-content-center">
            <p className="text-[1.375rem] font-normal">New Quote</p>
          </div>
        </div>
      </header>

      {/* body section  */}

      <section className=" pb-[10rem] h-auto overflow-x-auto scrollbar-hide scroll-smooth   w-full  gap-2.5 grid grid-cols-1 ">
        <div className="w-full  h-[2.5rem]  grid justify-items-center ">
          <div className="grid grid-cols-2 grid-rows-1 w-[22.375rem] h-10 px-0 py-[0.500rem] font-semibold text-[1.125rem] leading-6 items-center">
            <span>Company</span>
          </div>
        </div>

        <div className=" w-full h-[10rem] grid grid-cols-1 justify-items-center ">
          <div className=" w-[22.375rem] h-[10rem] border-1 rounded-xl p-[0.75rem] gap-1 grid grid-cols-1">
            <div className="grid grid-cols-[auto_auto] justify-between items-center">
              <div>
                <p className="font-semibold text-[1rem] text-[#1C1E21] leading-6">
                  Akash Tech Pvt Ltd
                </p>
              </div>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0373E9"
                  viewBox="0 0 256 256"
                >
                  <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                </svg>
              </Link>
            </div>

            <div className="w-[5.1875rem] h-[1.25rem] ">
              <p className=" text-sm font-medium text-[#494B4D] tracking-tight">
                Shreyas Patil
              </p>
            </div>
            <div className=" w-[13.25rem] h-[3.75rem] ">
              <p className=" font-normal  text-sm leading-5 tracking-normal">
                Sector 3, Area N <br />
                Waluj MIDC, Chh. Sambhajinagar 400001
              </p>
            </div>

            <div className="grid grid-cols-[auto_auto] gap-4 w-[15.125rem] h-[1.25rem] items-center">
              <div>
                <p className="font-normal text-sm tracking-normal">
                  8888888888
                </p>
              </div>
              <div>
                <p className="font-normal text-sm leading-5 tracking-normal">
                  shreyas@akashtech.in
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  h-[2.5rem]  grid justify-items-center ">
          <div className="grid grid-cols-1 grid-rows-1 w-[22.375rem] h-10 px-0 py-[0.500rem] font-semibold text-[1.125rem] leading-6 items-center">
            <span>Customer </span>
          </div>
        </div>

        <div className=" w-full h-[10rem] grid grid-cols-1 justify-items-center ">
          <div className=" w-[22.375rem] h-[10rem] border-1 rounded-xl p-[0.75rem] gap-1 grid grid-cols-1">
            <div className="grid grid-cols-[auto_auto] justify-between items-center">
              <div>
                <p className="font-semibold text-[1rem] text-[#1C1E21] leading-6">
                  Customer Name
                </p>
              </div>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0373E9"
                  viewBox="0 0 256 256"
                >
                  <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                </svg>
              </Link>
            </div>

            <div className="w-[5.1875rem] h-[1.25rem] ">
              <p className=" text-sm font-medium text-[#494B4D] tracking-tight">
                Shreyas Patil
              </p>
            </div>
            <div className=" w-[13.25rem] h-[3.75rem] ">
              <p className=" font-normal  text-sm leading-5 tracking-normal">
                Sector 3, Area N <br />
                Waluj MIDC, Chh. Sambhajinagar 400001
              </p>
            </div>

            <div className="grid grid-cols-[auto_auto] gap-4 w-[15.125rem] h-[1.25rem] items-center">
              <div>
                <p className="font-normal text-sm tracking-normal">
                  8888888888
                </p>
              </div>
              <div>
                <p className="font-normal text-sm leading-5 tracking-normal">
                  shreyas@akashtech.in
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[2.5rem] grid place-items-center border-t-0 border-r-0 border-b border-l-0 px-0 py-[0.25rem]">
          <div className="w-[22.375rem] h-[2.5rem] grid grid-cols-[5.125rem_auto] items-center gap-[0.125rem] px-0 py-[0.25rem]">
            <div className="w-[5.125rem] h-[1.5rem] font-medium text-[1rem] leading-[1.5rem] text-[#1C1E21]">
              Quote Date
            </div>
            <div className="w-[5.3125rem] h-[1.25rem] font-normal text-[0.875rem] leading-[1.25rem] text-[#06471E]">
              12 Dec 2024
            </div>
          </div>
        </div>

        <div className="w-full h-auto grid grid-cols-1 justify-items-center">
          <div className="w-[22.375rem] h-[2.5rem] px-0 py-[0.5rem] font-semibold text-[1.125rem] flex justify-start items-center leading-[1.5rem]">
            Items
          </div>

          <div className="grid grid-cols-1 justify-items-center border-1 rounded-2xl overflow-hidden">
            <div className="w-full grid place-items-center">
              <div className="w-[22.375rem] h-auto border-b">
                <div className="w-[22.375rem] h-[6rem] p-[1rem] gap-[0.125rem] grid grid-cols-[16.1875rem_3.6875rem]">
                <div className="w-[259px] h-[64px] grid grid-rows-[auto_auto] gap-2">
                  <div className="w-[259px] h-[40px]">
                    <p className="font-normal text-[14px] leading-5 text-[#1C1E21]">
                      AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts
                      DC
                    </p>
                  </div>
                  <div className="w-[259px] h-[16px] grid justify-items-start">
                    <p className="text-[#77787A] text-[12px] leading-4 font-normal">
                      item description
                    </p>
                  </div>
                </div>
                  <div className="w-[59px] h-[64px] grid grid-rows-[auto_auto] gap-1  justify-items-end">
                    <div className="w-[42px] h-[24px] grid justify-items-end ">
                      <p className="font-normal text-[16px] leading-6">6,175</p>
                    </div>
                    <div className="w-[59px] h-[20px] grid justify-items-end border2">
                      <p className="font-normal text-[14px] tracking-tight leading-5 text-[#77787A]">
                        6,175 x 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full grid place-items-center">
              <div className="w-[22.375rem] h-auto border-b">
                <div className="w-[22.375rem] h-[6rem] p-[1rem] gap-[0.125rem] grid grid-cols-[16.1875rem_3.6875rem]">
                <div className="w-[259px] h-[64px] grid grid-rows-[auto_auto] gap-2">
                  <div className="w-[259px] h-[40px]">
                    <p className="font-normal text-[14px] leading-5 text-[#1C1E21]">
                      AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts
                      DC
                    </p>
                  </div>
                  <div className="w-[259px] h-[16px] grid justify-items-start">
                    <p className="text-[#77787A] text-[12px] leading-4 font-normal">
                      item description
                    </p>
                  </div>
                </div>
                  <div className="w-[59px] h-[64px] grid grid-rows-[auto_auto] gap-1  justify-items-end">
                    <div className="w-[42px] h-[24px] grid justify-items-end ">
                      <p className="font-normal text-[16px] leading-6">6,175</p>
                    </div>
                    <div className="w-[59px] h-[20px] grid justify-items-end border2">
                      <p className="font-normal text-[14px] tracking-tight leading-5 text-[#77787A]">
                        6,175 x 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full grid place-items-center">
              <div className="w-[22.375rem] h-auto border-b">
                <div className="w-[22.375rem] h-[6rem] p-[1rem] gap-[0.125rem] grid grid-cols-[16.1875rem_3.6875rem]">
                <div className="w-[259px] h-[64px] grid grid-rows-[auto_auto] gap-2">
                  <div className="w-[259px] h-[40px]">
                    <p className="font-normal text-[14px] leading-5 text-[#1C1E21]">
                      AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts
                      DC
                    </p>
                  </div>
                  <div className="w-[259px] h-[16px] grid justify-items-start">
                    <p className="text-[#77787A] text-[12px] leading-4 font-normal">
                      item description
                    </p>
                  </div>
                </div>
                  <div className="w-[59px] h-[64px] grid grid-rows-[auto_auto] gap-1   justify-items-end">
                    <div className="w-[42px] h-[24px] grid justify-items-end ">
                      <p className="font-normal text-[16px] leading-6">6,175</p>
                    </div>
                    <div className="w-[59px] h-[20px] grid justify-items-end border2">
                      <p className="font-normal text-[14px] tracking-tight leading-5 text-[#77787A]">
                        6,175 x 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 justify-items-center">
          <div className="w-[7.6875rem] h-[2.5rem] grid grid-cols-1 justify-items-center bg-[#F0F9FF] rounded-full">
            <div className="grid grid-cols-[auto_auto] justify-center items-center gap-[0.5rem]">
              <div className="w-[4.1875rem] h-[1.5rem]">
                <Link href="/">
                  <button className="font-medium text-[1rem] leading-[1.5rem] text-[#0373E9]">
                    Add Item
                  </button>
                </Link>
              </div>
              <div className="w-[1rem] h-[1rem] grid place-items-center ">
                <Link href="/">
                  <button className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
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
      </section>

      {/* bottom navigation bar  */}

      <nav className="w-full h-[8.75rem] pt-4 pb-0 rounded-tl-2xl rounded-tr-2xl bg-white blur-10 shadow-spread-3 shadow-medium grid grid-cols-1 justify-items-center fixed left-0 bottom-0 border-1">
        <div className="gap-4 h-24 w-full grid grid-cols-1 justify-items-center">
          <div className="w-[22.375rem] h-7 px-4 grid grid-cols-[auto_auto] justify-between items-center">
            <p className="font-normal text-sm leading-5 text-[#494B4D]">
              Total amount
            </p>
            <div className="font-normal text-[1.375rem] leading-7 text-[#1C1E21]">
              ₹ 12350
            </div>
          </div>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full w-[22.375rem]"
          >
            Share
          </Button>
        </div>
      </nav>
    </div>
  );
}
