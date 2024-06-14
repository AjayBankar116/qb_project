


// components/layouts/SecondaryLayout.js

import Footer from "./Footer";
import Header from "./Header";


const SecondaryLayout = ({ children }:any) => {
  return (
    <div className=" w-full grid grid-cols-1 justify-items-center gap-4">
      <Header/>
      <main className=" flex flex-col justify-center items-center">{children}</main>
      <Footer/>
      
    </div>
  );
};

export default SecondaryLayout;