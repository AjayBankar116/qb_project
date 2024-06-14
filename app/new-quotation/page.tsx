import { Button } from "@/components/ui/button";

export default function NewQuotation() {
  return (
    <div className=" flex flex-col justify-center items-center gap-1 w-full"> 

    {/* header section  */}
      <header className="w-full h-[64px] flex justify-center items-center px-4 py-6  shadow-md blur-10 shadow-spread-3  ">
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

          <div className=" w-[50px] h-[28px]  flex justify-center items-center">
            <p className=" text-[22px] font-semibold">#442</p>
          </div>
        </div>
      </header>
    

    {/* bottom navigation  */}
      <nav className=" w-full h-[140px] flex flex-col justify-center items-center fixed left-0 bottom-0">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full w-[330px]"
              >
                Next
              </Button>
            </nav>
    </div>
  );
}
