'use client'
import Link from "next/link";
import { useState } from "react";


export default function QuotesAndCustomerBottomNav() {

  const [customer, setCustomer] = useState(false);
  const [quotes, setQuotes] = useState(false);

  const handleCustomerClick = () =>{

    setCustomer (true)
    setQuotes(false)
  }

  

  const handleQuotesClick = () =>{

    setQuotes (true)
    setCustomer(false)
  }



  return (
    <div className=" w-full h-[80px]  fixed bg-white  bottom-0 flex  justify-between items-center  shadow-large blur-10 shadow-spread-3 ">
      <div className=" w-[179px] h-[80px]  flex justify-center items-center">
        <Link href="/quotes" onClick={handleQuotesClick}>
          <div className=" w-[87.5px] h-[80px]  flex justify-center items-center flex-col gap-1  ">
            <div className={` ${quotes ? 'bg-green-100' : 'bg-white'} w-[64px] h-[32px]  rounded-2xl flex justify-center items-center `}>
              <div className=" w-[24px] h-[24px]  flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#7C837E"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path>
                </svg>
              </div>
            </div>

            <div className=" w-[87.5px] h-[16px]  flex justify-center items-center">
              <p className=" text-[12px] font-semibold text-center text-[#7C837E]">
                Quotes
              </p>
            </div>
          </div>
        </Link>

        <Link href="/customers" onClick={handleCustomerClick}>
          <div className="  w-[87px] h-[80px] flex flex-col justify-center items-center gap-1">
            <div className= {` ${customer ? 'bg-green-100' : 'bg-white'}  w-[64px] h-[32px] rounded-2xl flex justify-center items-center bg-green-50 `}>
              <div className=" w-[32px] h-[32px]  flex justify-center items-center   ">
                <div className=" w-[24px] h-[24px] ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill={customer ? '#06471E' : '#7C837E'}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.05 14.1625L7.04997 14.1625C6.9958 14.2349 6.92788 14.2958 6.85012 14.3419C6.77236 14.388 6.68628 14.4183 6.59681 14.4311C6.50733 14.4438 6.41621 14.4388 6.32866 14.4163C6.24112 14.3939 6.15887 14.3543 6.08661 14.3C5.94088 14.1905 5.84461 14.0276 5.81899 13.8471C5.79336 13.6666 5.84048 13.4833 5.94997 13.3375L5.95007 13.3374C6.6092 12.455 7.4881 11.7608 8.49916 11.3239L8.58791 11.2856L8.51652 11.2204C7.96737 10.719 7.58262 10.0634 7.41279 9.33941C7.24295 8.61547 7.29594 7.85709 7.56482 7.16381C7.8337 6.47052 8.3059 5.87473 8.91944 5.45461C9.53299 5.03449 10.2592 4.80968 11.0028 4.80968C11.7464 4.80968 12.4726 5.03449 13.0862 5.45461C13.6997 5.87473 14.1719 6.47052 14.4408 7.16381C14.7097 7.85709 14.7627 8.61547 14.5928 9.33941C14.423 10.0634 14.0383 10.719 13.4891 11.2204L13.4178 11.2855L13.5064 11.3239C14.5154 11.7616 15.3923 12.4557 16.0499 13.3374L16.05 13.3375C16.1042 13.4097 16.1436 13.4919 16.166 13.5794C16.1884 13.6668 16.1934 13.7579 16.1806 13.8472C16.1678 13.9366 16.1376 14.0226 16.0916 14.1003C16.0456 14.178 15.9847 14.2458 15.9125 14.3C15.8403 14.3542 15.7581 14.3936 15.6706 14.416C15.5832 14.4384 15.4921 14.4434 15.4028 14.4306C15.3134 14.4178 15.2274 14.3876 15.1497 14.3416C15.072 14.2956 15.0042 14.2347 14.95 14.1625C14.4901 13.5493 13.8937 13.0516 13.2081 12.7088C12.5225 12.366 11.7665 12.1875 11 12.1875C10.2335 12.1875 9.47748 12.366 8.79188 12.7088C8.10628 13.0516 7.50991 13.5493 7.05 14.1625ZM2.75 4.0625H2.8125V4V1.75C2.8125 1.36875 2.96395 1.00312 3.23353 0.733534C3.50312 0.46395 3.86875 0.3125 4.25 0.3125H17.75C18.1312 0.3125 18.4969 0.46395 18.7665 0.733534C19.036 1.00312 19.1875 1.36875 19.1875 1.75V18.25C19.1875 18.6312 19.036 18.9969 18.7665 19.2665C18.4969 19.536 18.1312 19.6875 17.75 19.6875H4.25C3.86875 19.6875 3.50312 19.536 3.23353 19.2665C2.96395 18.9969 2.8125 18.6312 2.8125 18.25V16V15.9375H2.75H1.25C1.06766 15.9375 0.892795 15.8651 0.763864 15.7361C0.634933 15.6072 0.5625 15.4323 0.5625 15.25C0.5625 15.0677 0.634933 14.8928 0.763864 14.7639C0.892795 14.6349 1.06766 14.5625 1.25 14.5625H2.75H2.8125V14.5V10.75V10.6875H2.75H1.25C1.06766 10.6875 0.892795 10.6151 0.763864 10.4861C0.634933 10.3572 0.5625 10.1823 0.5625 10C0.5625 9.81766 0.634933 9.6428 0.763864 9.51386C0.892795 9.38493 1.06766 9.3125 1.25 9.3125H2.75H2.8125V9.25V5.5V5.4375H2.75H1.25C1.06766 5.4375 0.892795 5.36507 0.763864 5.23614C0.634933 5.1072 0.5625 4.93234 0.5625 4.75C0.5625 4.56766 0.634933 4.3928 0.763864 4.26386C0.892795 4.13493 1.06766 4.0625 1.25 4.0625H2.75ZM17.75 18.3125H17.8125V18.25V1.75V1.6875H17.75H4.25H4.1875V1.75V18.25V18.3125H4.25H17.75ZM9.07723 7.21524C8.82313 7.59553 8.6875 8.04263 8.6875 8.5C8.6875 9.11331 8.93114 9.70151 9.36482 10.1352C9.79849 10.5689 10.3867 10.8125 11 10.8125C11.4574 10.8125 11.9045 10.6769 12.2848 10.4228C12.665 10.1687 12.9614 9.80751 13.1365 9.38496C13.3115 8.9624 13.3573 8.49743 13.2681 8.04885C13.1788 7.60027 12.9586 7.18822 12.6352 6.86482C12.3118 6.54141 11.8997 6.32116 11.4511 6.23193C11.0026 6.14271 10.5376 6.1885 10.115 6.36353C9.69249 6.53856 9.33133 6.83496 9.07723 7.21524Z"
                      fill="#06471Es"
                      stroke="#06471E"
                      stroke-width="0.125"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className=" w-[87.5px] h-[16px]   flex justify-center items-center">
                <p className=" text-[12px] font-semibold text-center text-green-900">
                  Customer
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <Link href="/signup">
        <div className="  h-[80px]  flex justify-end items-center   ">
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
  );
}
