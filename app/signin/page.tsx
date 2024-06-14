"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { log } from "console";

export default function SignInForm({
  searchParams,
}: {
  searchParams: { message: String };
}) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    redirect("/");
  };
  // const [mobile, setMobileNumber] = useState("+91 ");
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const handleMobileInputClick = (e: any) => {
    setVisible(true);
  };

  const handleOtherInputClick = () => {
    setVisible(true);
  };

  return (
    <div className="overflow-y-hidden h-full grid grid-cols-1 justify-items-center gap-8  ">

      {/* header section  */}
      <header className="w-full h-[4rem] flex justify-between items-center  left-0">
        <div className=" w-full flex justify-center items-center">
          <div className="w-[24px] h-[24px]">
            <p className="">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#000000"
                />
              </svg>
            </p>
          </div>
          <div className=" w-[294px] h-[26px] flex justify-center items-center ">
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
          <div className="w-[24px] h-[24px] ">
            <p className=" hidden">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#000000"
                />
              </svg>
            </p>
          </div>
        </div>
      </header>
      

      {/* body section   */}
      <section className=" grid grid-cols-1 justify-items-center   ">
        <div className=" grid grid-cols-1 justify-items-center h-[21.25rem] p-0  ">
          <div className="w-[4.5rem] h-[2.125rem]">
            <p className="font-semibold text-[1.875rem]">Login</p>
          </div>

          <div className="w-[9.375rem] h-[1.5rem] mt-5">
            <p className="text-[1.125rem] -tracking-normal">+91 9888888888</p>
          </div>

          <form onSubmit={handleSubmit} className=" mt-5 grid grid-cols-1 gap-8">
            <div>
              <div className="relative ">
                <div className=" flex justify-start items-center">
                  <span
                    className={` ${
                      visible ? "block" : "hidden"
                    }    absolute start-2 top-4   text-gray-500 dark:text-gray-400 transition-all duration-300 
                    
                  `}
                  >
                    +91
                  </span>
                </div>
                <input
                  onClick={handleMobileInputClick}
                  type="tel"
                  id="mibile_number"
                  pattern="^\d{10}$"
                  aria-describedby="mobile_number_help"
                  className="block px-2.5 pb-3 pt-4 w-[20.625rem] h-[3.25rem] font-normal  text-sm text-gray-700 leading-6 bg-transparent rounded-xl border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600  dark:focus:border-green-500 focus:outline-none focus:border-2 focus:ring-0 focus:border-green-600 peer pl-10"
                  placeholder=" "
                />
                <label
                  for="mobile_number"
                  class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Mobile Number
                </label>
              </div>
            </div>

            <div className=" w-full  ">
              <div>
                <div className="relative ">
                  <input
                    onClick={handleOtherInputClick}
                    type="text"
                    id="new_password"
                    aria-describedby="new_password_help"
                    className="block px-2.5 pb-3 pt-4 w-[20.625rem] h-[3.25rem] font-normal  text-sm text-gray-700 leading-6 bg-transparent rounded-xl border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-2 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
                    placeholder=" "
                  />
                  <label
                    for="new_password"
                    class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    New Password
                  </label>
                </div>
              </div>
              <p className="mt-5 ">
                Forgot password?{" "}
                <Link href="/forgot-password">
                  <span className=" text-blue-800">Click here</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      

      {/* bottom navigation  */}
      <nav className=" w-full h-[8.75rem] flex flex-col justify-center items-center fixed left-0 bottom-0">
        <Button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full w-[20.625rem]"
        >
          Login
        </Button>
      </nav>
    </div>
  );
}
