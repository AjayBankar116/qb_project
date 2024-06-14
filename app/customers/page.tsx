import SearchField from "@/components/SearchField";
import SecondaryLayout from "@/components/SecondaryLayout";
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

export default function Customers() {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center gap-4">
     <SecondaryLayout>
      <div className=" w-full bg-white  flex justify-center items-center">
        <div className=" w-[358px]  h-[52px] flex justify-center items-center rounded-2xl ">
          <SearchField searchIcon={<SearchIcon />} />
        </div>
      </div>

      <div className=" flex flex-col w-full justify-center  items-center pb-24  overflow-x-auto scrollbar-hide scroll-smooth ">
        <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
                  </svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
                  </svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
                  </svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
                  </svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
                  </svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path>
                  </svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div> 
        <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#000000" viewBox="0 0 256 256"><path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path></svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#000000" viewBox="0 0 256 256"><path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path></svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="w-[390px] h-[74px]  flex">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#000000" viewBox="0 0 256 256"><path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path></svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>

         <div className="w-[390px] h-[74px]  flex ">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#000000" viewBox="0 0 256 256"><path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path></svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div> 

        <div className="w-[390px] h-[74px]  flex">
          <div className=" w-[56px] h-[74px] flex justify-center items-center">
            <div className="w-[32px] h-[32px]  rounded-full flex justify-center items-center bg-[#075985]">
              <p className=" text-white">S</p>
            </div>
          </div>

          <div className=" w-[334px] h-[74px] border-b flex flex-col justify-center pt-4 pr-4 pb-4 pl-2 ">
            <div className=" w-[310px] h-[20px]  flex justify-start items-center ">
              <p className=" text-[16px] font-medium text-[#1C1E21]">
                Shreyas Patil
              </p>
            </div>
            <div className="w-[148px] h-[22px]  gap-0.5 flex">
              <div className="w-[22px] h-[22px]  flex justify-start items-center ">
                <div className=" w-[16px] h-[16px]  flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#000000" viewBox="0 0 256 256"><path d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM216,96V208H184V96ZM56,48H168V208H144V160a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48H56Zm72,160H96V168h32ZM72,80a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,80Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,80ZM72,120a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H128A8,8,0,0,1,120,120Z"></path></svg>
                </div>
              </div>

              <div className=" flex justify-start ">
                <p className=" text-[14px] font-normal ">Akash Tech Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>  */}
      </div>

      </SecondaryLayout>
    </div>
  );
}
