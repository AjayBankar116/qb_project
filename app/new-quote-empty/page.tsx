import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewQuotationEmpty() {
  return (
    <div className=" flex flex-col justify-center items-center gap-4 w-full">
      {/* header section  */}
      <header className="w-full h-[64px] flex justify-center items-center px-4 py-6  shadow-md blur-10 shadow-spread-3  ">
        <div className=" w-[342px]  h-[28px]  flex gap-3">
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


      {/* body section */}
      
      <section className=" top-32  w-full h-[256px] gap-2.5  flex flex-col">
        <div className="w-full  h-[40px]  flex justify-center items-center ">
          <div className="w-[358px]  h-[40px] px-0 py-2 font-semibold text-[18px] flex justify-start items-center leading-6">
            Customer
          </div>
        </div>

        <div className=" w-full h-[104px]   flex justify-center items-center ">
          <div className=" w-[358px] h-[104px] border-1 rounded-xl  flex justify-center items-center">
            <div className="w-[177px] h-[40px]   flex justify-center items-center  bg-[#F0F9FF] rounded-full">
              <div className=" flex justify-center items-center ">
                <div className=" w-[124px] h-[24px] ">
                  <Link href="/">
                    <button className=" font-medium text-[16px] leading-6 text-[#0373E9]">
                      Select Customer
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
        <div className="w-full gap-2.5 h-[40px]  flex justify-center items-center">
          <div className="w-[358px]  h-[40px] px-0 py-2 font-semibold text-[18px] flex justify-start items-center leading-6">
            Items
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
      </section>


{/* bottom navigation bar */}
      <nav className="  w-full h-[140px] pt-4 pr-0 pb-0 pl-0 rounded-tl-2xl rounded-tr-2xl  blur-10 shadow-spread-3 shadow-medium   flex flex-col justify-center items-center fixed left-0 bottom-0 border-1">
        <div className="  gap-4 h-[96px] w-full flex flex-col justify-center items-center">
          <div className=" w-[358px]  h-[28px]  px-4 py-0 flex justify-between items-center">

            <div>
              <p className=" font-normal text-[14px] leading-5 text-[#494B4D]">Total amount</p>
            </div>
            <div className="font-normal text-[22px] leading-7 text-[#1C1E21]"> ₹ 0</div>

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
