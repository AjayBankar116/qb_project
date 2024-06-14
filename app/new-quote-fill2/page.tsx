"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import html2pdf from "html2pdf.js";


export default function NewQuotationFill() {
  const slideRef = useRef(null);

  const handleGeneratePdf = async () => {
    const opt = {
      margin: [0, 0, 0, 0], // No margins to ensure full content capture
      filename: 'document.pdf',
      html2canvas: { scale: 5 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    try {
      // Generate the PDF file
      const pdfBlob = await html2pdf()
        .from(slideRef.current)
        .set(opt)
        .output('blob');

      // Create a URL for the PDF file
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfUrl;
      downloadLink.download = 'document.pdf';
      downloadLink.click();

      // Revoke the object URL after the download is complete
      URL.revokeObjectURL(pdfUrl);

      // Ask the user if they want to share the PDF
      const shareConfirm = window.confirm('Do you want to share the downloaded PDF?');

      if (shareConfirm) {
        // Check if the Web Share API is supported
        if (navigator.canShare && navigator.canShare({ files: [pdfBlob] })) {
          await navigator.share({
            files: [new File([pdfBlob], 'document.pdf', { type: 'application/pdf' })],
            title: 'Share PDF',
            text: 'Check out this PDF file',
          });
        } else {
          alert('Web Share API is not supported in this browser.');
        }
      }
    } catch (error) {
      console.error('Error generating or sharing PDF:', error);
    }
  };
  return (
    <div className=" grid grid-cols-1 justify-center items-center  w-full">
      {/* header section  */}
      <header className="w-full h-[4rem] grid place-content-center  px-[1rem] py-[1.5rem] top-0 sticky bg-background shadow-md blur-10 shadow-spread-3">
        <div className="w-[21.375rem] h-[1.75rem] grid grid-cols-[1.5rem_auto] gap-[0.75rem] items-center">
          <div className="w-[1.5rem] h-[1.5rem] gird place-content-center">
            <svg
              color="text-primary"
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
            <p className="text-[1.375rem] text-primary font-normal">Quote - #442</p>
          </div>
        </div>
      </header>

      {/* body section  */}

      <section ref={slideRef} className="h-auto pb-[10rem] overflow-x-auto scrollbar-hide scroll-smooth w-full  grid grid-cols-1 justify-items-center  ">
        <div className=" w-full h-[4rem] px-0 py-4 flex border-b-3 border-t-3 justify-center items-center bg-elevated">
          <div className="w-[22.375rem] h-[2.5rem]  flex justify-between items-center ">
            <div className="w-[6.875rem] h-[1.5rem] ">
              <Link
                href="/revisions"
                className=" font-medium text-[1rem] text-green_dark"
              >
                View Revisions
              </Link>
            </div>

            <div>
              <p className=" font-medium text-[1rem] text-green_dark">5</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[2.5rem] flex justify-center items-center border-b-3 bg-background   px-0 py-[0.25rem]">
          <div className="w-[22.375rem] h-[2.5rem] flex justify-start items-center  gap-[0.125rem] px-0 py-[0.25rem]">
            <div className="w-[5.125rem] h-[1.5rem] font-medium text-[1rem] leading-[1.5rem] text-primary">
              Quote Date
            </div>
            <div className="w-[5.3125rem] h-[1.25rem] font-normal text-[0.875rem] leading-[1.25rem] text-green_dark">
              12 Dec 2024
            </div>
          </div>
        </div>

        <div className=" w-full grid grid-cols-1 justify-items-center border-b-3 bg-background ">
          <div className="w-full  h-[2.5rem]  grid justify-items-center ">
            <div className="grid grid-cols-1 grid-rows-1 w-[22.375rem] h-10 px-0 py-[0.500rem] font-semibold text-[1.125rem] leading-6 items-center">
              <span className=" text-primary">Customer</span>
            </div>
          </div>

          <div className="w-full h-[10rem] grid grid-cols-1 justify-items-center  ">
            <div className="w-[22.375rem] h-[10rem]  gap-1 grid  grid-cols-1 grid-rows-[auto_auto_auto_auto]">
              <div className="grid justify-items-start">
                <p className="font-semibold text-[1rem] text-primary leading-6">
                  Akash Tech Pvt Ltd
                </p>
              </div>
              <div className="w-[5.1875rem] h-5">
                <p className="text-[0.875rem] font-medium text-secondary tracking-tight">
                  Shreyas Patil
                </p>
              </div>
              <div className="w-[13.25rem] h-[3.75rem]">
                <p className="font-normal text-sm leading-5 tracking-normal text-secondary">
                  Sector 3, Area N <br />
                  Waluj MIDC, Chh. Sambhajinagar 400001
                </p>
              </div>
              <div className="w-[15.125rem] h-5 gap-4 grid grid-cols-[auto_auto] items-center">
                <p className="font-normal text-sm leading-5 tracking-normal text-secondary">
                  8888888888
                </p>
                <p className="font-normal text-sm tracking-normal text-secondary ">
                  shreyas@akashtech.in
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full gap-2 h-auto grid grid-cols-1 justify-items-center bg-background   ">
          <div className=" text-primary w-[22.375rem]  h-[2.5rem] px-0 py-2 font-semibold text-[18px] flex justify-start items-center leading-6">
            Items
          </div>

          <div className=" w-full  grid grid-cols-1 justify-items-center border-b  ">
            <div className="w-[22.375rem] h-auto  overflow-hidden">
              <div className="w-[22.375rem] h-[6rem]   gap-2 grid grid-cols-[auto_auto]">
                <div className="w-[16.1875rem] h-[4rem] grid grid-rows-[auto_auto] gap-2">
                  <div className="w-[16.1875rem] h-[2.5rem]">
                    <p className="font-normal text-[0.875rem] leading-5 text-primary">
                      AC DB 3 Phase 7-15 KiloWatt + DC DB 2 in 2 out 1000 Volts
                      DC
                    </p>
                  </div>
                  <div className="w-[16.1875rem] h-[1rem] grid justify-items-start">
                    <p className="text-Tertiary text-[0.75rem] leading-4 font-normal">
                      item description
                    </p>
                  </div>
                </div>
                <div className="w-[3.6875rem] h-[4rem] grid grid-rows-[auto_auto] gap-1  justify-items-end">
                  <div className="w-[2.625rem] h-[1.5rem] grid justify-items-end ">
                    <p className="font-normal text-[1rem] leading-6 text-primary">6,175</p>
                  </div>
                  <div className="w-[3.6875rem] h-[1.25rem] grid justify-items-end border2">
                    <p className="font-normal text-[0.875rem] tracking-tight leading-5 text-Tertiary">
                      6,175 x 2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 justify-items-center px-3 py-2 gap-2 bg-background">
          <div className="w-[22.375rem]">
            <div className="grid w-full h-auto gap-1">
              <Label
                htmlFor="message"
                className="font-medium text-[1rem] text-primary leading-6"
              >
                Term and Conditions
              </Label>
              <Textarea placeholder="" id="message" className=" w-full h-24" />
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 justify-items-center px-3 py-2 gap-2 bg-background">
          <div className="w-[22.375rem]">
            <div className="grid w-full h-auto gap-1">
              <Label
                htmlFor="message"
                className="font-medium text-[1rem] text-primary leading-6"
              >
                Internal Notes
              </Label>
              <Textarea placeholder="" id="message" className=" w-full h-24" />
            </div>
          </div>
        </div>
      </section>

      {/* bottom navigation  */}

      <nav className="w-full h-[9.125rem] pt-4 pb-0 rounded-tl-2xl rounded-tr-2xl bg-white blur-10 shadow-spread-3 shadow-medium grid grid-cols-1 justify-items-center fixed left-0 bottom-0 border-1">
        <div className="gap-4 h-24 w-full grid grid-cols-1 justify-items-center">
          <div className="w-[22.375rem] h-7 px-4 grid grid-cols-[auto_auto] justify-between items-center">
            <p className="font-normal text-sm leading-5 text-secondary">
              Total amount
            </p>
            <div className="font-normal text-[1.375rem] leading-7 text-primary">
              ₹ 12350
            </div>
          </div>

          <div className="w-[22.375rem] h-[3.25rem] border-1 rounded-full bg-interactive_accent gap-[0.0625rem] flex justify-center items-center">
            <Link
              href="/new-quote-fill2"
              className=" w-[7.375rem] h-[3.25rem]  px-2 py-4 flex justify-center items-center gap-1"
            >
              <div>
                <p className=" text-white font-medium text-[1rem]">Revision</p>
              </div>
              <div>
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                  </svg>
                </p>
              </div>
            </Link>
            <Link
              onClick={handleGeneratePdf}
              href="/new-quote-fill2"
              className=" w-[7.375rem] h-[3.25rem] border-1  px-2 py-4 flex justify-center items-center gap-1"
            >
              <div>
                <p className=" text-white font-medium text-[1rem]">Share</p>
              </div>
              <div>
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                  </svg>
                </p>
              </div>
            </Link>
            <Link
              href="/new-quote-fill2"
              className=" w-[7.375rem] h-[3.25rem]  px-2 py-4 flex justify-center items-center gap-1"
            >
              <div>
                <p className=" text-white font-medium text-[1rem]">Edit</p>
              </div>
              <div>
                <p className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
                </svg>
                </p>
              </div>
            </Link>
            
          </div>

          
        </div>
      </nav>
    </div>
  );
}
