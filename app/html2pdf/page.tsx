"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

export default function Html2Pdf() {
  const slideRef = useRef(null);

  const handleGeneratePdf = () => {
    const opt = {
      margin: 0,
      filename: "document.pdf",
      //   image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 5 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(slideRef.current).set(opt).save();
  };

  return (
    <div>
      <div className=" flex flex-col justify-center items-center gap-4 w-full">
        {/* header section  */}
        <header className="w-full h-[4rem] grid grid-cols-1 justify-center items-center px-[1rem] py-[1.5rem] top-0 sticky bg-white shadow-md blur-10 shadow-spread-3">
          <div className="w-[21.375rem] h-[1.75rem] grid grid-cols-[1.5rem_auto] gap-[0.75rem] items-center">
            <div className="w-[1.5rem] h-[1.5rem] grid place-items-center">
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
            <div className="w-[7.9375rem] h-[1.75rem] leading-[1.75rem] grid place-items-center">
              <p className="text-[1.375rem] font-normal">Quote - #442</p>
            </div>
          </div>
        </header>

        {/* body section  */}

        <section
          ref={slideRef}
          className="  h-auto pb-[10rem] overflow-x-auto scrollbar-hide scroll-smooth   w-full  gap-[0.625rem]  flex flex-col "
        >
          <div className="w-full  h-[2.5rem]  flex justify-center items-center ">
            <div className="w-[22.375rem]  h-10 px-0 py-[0.500rem] font-semibold text-[1.125rem] flex justify-start items-center leading-6">
              Customer
            </div>
          </div>

          <div className=" w-full h-[10rem]   flex justify-center items-center ">
            <div className="w-[22.375rem] h-[10rem] border-1 rounded-xl p-[0.75rem] gap-1 flex flex-col   ">
              <div className=" flex justify-between   ">
                <div>
                  <p className=" font-semibold  text-[1rem] text-[#1C1E21] leading-6">
                    Akash Tech Pvt Ltd
                  </p>
                </div>
              </div>
              <div className="w-[5.1875rem] h-5 ">
                <p className=" text-[0.875rem] font-medium text-[#494B4D] tracking-tight">
                  Shreyas Patil
                </p>
              </div>
              <div className=" w-[13.25rem] h-[3.75rem] ">
                <p className=" font-normal  text-sm leading-5 tracking-normal">
                  Sector 3, Area N <br />
                  Waluj MIDC, Chh. Sambhajinagar 400001
                </p>
              </div>

              <div className=" w-[15.125rem] h-5  gap-4 flex justify-start items-center">
                <div>
                  <p className=" font-normal text-sm leading-5  tracking-normal">
                    8888888888
                  </p>
                </div>
                <div>
                  <p className=" font-normal text-sm   tracking-normal">
                    shreyas@akashtech.in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" w-full h-[2.5rem]  flex justify-center items-center gap-2  border-t-0 border-r-0 border-b border-l-0  px-0 py-4
        "
          >
            <div className=" w-[22.375rem] h-5  flex justify-start items-center gap-2    px-0 py-4">
              <div className="w-[5.125rem] h-6 font-medium text-[1rem] leading-6 text-[#1C1E21] ">
                Quote Date
              </div>
              <div className="w-[5.3125rem] h-5 font-normal text-sm leading-5 text-[#06471E]">
                12 Dec 2024
              </div>
            </div>
          </div>
          <div className="w-full gap-2 h-auto   flex-col  flex justify-center items-center  ">
            <div className="w-[358px]  h-[40px] px-0 py-2 font-semibold text-[18px] flex justify-start items-center leading-6">
              Items
            </div>

            <div className=" w-full h-[288p]  grid justify-center items-center  ">
              <div className="w-[358px] h-auto rounded-2xl border-1 grid grid-cols auto auto">
                <div className=" w-[358px] h-[96px] border-t-0 border-r-0 border-b border-l-0  p-4 gap-2 flex ">
                  <div className=" w-[259px] h-[64px]  flex flex-col gap-2 ">
                    <div className="w-[259px] h-[40px] ">
                      <p className=" font-normal text-[14px] leading-5 text-[#1C1E21]">
                        AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000
                        Volts DC
                      </p>
                    </div>

                    <div className=" w-[259px] h-[16px]  flex justify-start items-center ">
                      <p className=" text-[#77787A] text-[12px] leading-4 font-normal">
                        item description
                      </p>
                    </div>
                  </div>
                  <div className=" w-[59px] h-[64px] flex flex-col gap-1 ">
                    <div className=" justify-end flex ">
                      <div className=" w-[42px] h-[24px]">
                        <p className=" font-normal text-[16px] leading-6">
                          6,175
                        </p>
                      </div>
                    </div>

                    <div className=" w-[59px] h-[20px]  flex justify-start">
                      <p className="font-normal text-[14px] tracking-tight leading-5 text-[#77787A]">
                        6,175 x 2
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" w-[358px] h-[96px]   p-4 gap-2 flex ">
                  <div className=" w-[259px] h-[64px]  flex flex-col gap-2 ">
                    <div className="w-[259px] h-[40px] ">
                      <p className=" font-normal text-[14px] leading-5 text-[#1C1E21]">
                        AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000
                        Volts DC
                      </p>
                    </div>

                    <div className=" w-[259px] h-[16px]  flex justify-start items-center ">
                      <p className=" text-[#77787A] text-[12px] leading-4 font-normal">
                        item description
                      </p>
                    </div>
                  </div>
                  <div className=" w-[59px] h-[64px] flex flex-col gap-1 ">
                    <div className=" justify-end flex ">
                      <div className=" w-[42px] h-[24px]">
                        <p className=" font-normal text-[16px] leading-6">
                          6,175
                        </p>
                      </div>
                    </div>

                    <div className=" w-[59px] h-[20px]  flex justify-start">
                      <p className="font-normal text-[14px] tracking-tight leading-5 text-[#77787A]">
                        6,175 x 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center px-3 py-0 gap-2">
            <div className="w-[22.375rem]">
              <div className="grid w-full h-auto gap-1">
                <Label
                  htmlFor="message"
                  className="font-medium text-[1rem] text-[#1C1E21] leading-6"
                >
                  Term and Conditions
                </Label>
                <Textarea
                  placeholder=""
                  id="message"
                  className=" w-full h-24"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center px-3 py-0 gap-2">
            <div className="w-[22.375rem]">
              <div className="grid w-full h-auto gap-1">
                <Label
                  htmlFor="message"
                  className="font-medium text-[1rem] text-[#1C1E21] leading-6"
                >
                  Internal Notes
                </Label>
                <Textarea
                  placeholder=""
                  id="message"
                  className=" w-full h-24"
                />
              </div>
            </div>
          </div>
        </section>

        <button onClick={handleGeneratePdf} style={{ marginTop: "20px" }}>
          Click me
        </button>

        {/* bottom navigation  */}

        {/* <nav className="  w-full h-[8.75rem] pt-4 pr-0 pb-0 pl-0 rounded-tl-2xl rounded-tr-2xl bg-white  blur-10 shadow-spread-3 shadow-medium   flex flex-col justify-center items-center fixed left-0 bottom-0 border-1">
        <div className="  gap-4 h-24 w-full flex flex-col justify-center items-center">
          <div className=" w-[22.375rem]  h-7  px-4 py-0 flex justify-between items-center">
            <div>
              <p className=" font-normal text-sm leading-5 text-[#494B4D]">
                Total amount
              </p>
            </div>
            <div className="font-normal text-[1.375rem] leading-7 text-[#1C1E21]">
              {" "}
              ₹ 12350{" "}
            </div>
          </div>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full w-[22.375rem]"
          >
            Share 
          </Button>
        </div>
      </nav> */}
      </div>
    </div>
  );
}
