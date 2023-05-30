import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";
import React from "react";
import Typed from "typed.js";


const TypedText = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);
  
    React.useEffect(() => {
      const options = {
        strings: ["Mahasiswa", "Web Developer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };
  
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
  
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      };
    }, []);
  
    return <span ref={el} className="ont-extrabold text-transparent font-bold bg-clip-text bg-gradient-to-tl from-purple-600 to-blue-600"/>;
  };
const HomeLayout = () => {
  
  return (
    <>
      <Navbar />
      <main className="justify-center h-screen flex flex-col-reverse  items-center   md:flex-row md:px-9 md:justify-between w-full  max-w-5xl lg:mx-auto lg:px-0 md:py-10 ">
        <div className="flex-col flex gap-1 text-center " data-aos="fade-right">
          <h1 className=" text-3xl font-semibold font-mono dark:text-gray-50 tracking-tighter md:mt-0 ">
            Regi Al Habib
          </h1>
          <p className="text-xl font-semibold ">
            <TypedText></TypedText>
          </p>
          <p className="font-medium mx-3 md:mx-0 dark:text-gray-50">
            Hi everyone 👋🏼, welcome to my portfolio website
          </p>
        </div>
        <div className="" data-aos="fade-left">
          <img src="./img/ww.png" className="ml-3 md:ml-0"></img>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout
