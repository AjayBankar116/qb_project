import { GeistSans } from "geist/font/sans";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./provider";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  
  
  children,
}: {
  children: React.ReactNode;
}) 



{
  return (
    <html lang="en" className={roboto.className}>
      <head>
      
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </head>
      <body className=" text-background ">
        <Providers>
        <main className="min-h-screen flex flex-col items-center">
          {/* <Header/> */}
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
