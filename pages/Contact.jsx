/* eslint-disable react/no-unescaped-entities */
import Footer from "../src/components/Fragments/Footer";
import Navbar from "../src/components/Fragments/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col  py-20 w-full max-w-5xl px-10 gap-6 md:mx-auto lg:px-0 " >
        <div className="flex-col flex gap-4 ">
          <h1 className="text-4xl font-bold dark:text-gray-50">Contact</h1>
          <p className="font-medium text-lg dark:text-gray-50">
            I'm excited to connect with everyone so please don’t hesitate to get
            in touch with me by following my social media bellow:
          </p>
          <ul className="list-disc list-inside flex flex-col font-medium  text-lg gap-2 dark:text-gray-50">
            <li>
              Email -{" "}
              <a href="#" className="underline font-semibold">
                ffregi86@gmail.com
              </a>
            </li>
            <li>
              Github -{" "}
              <a
                href="https://github.com/Regialhabib"
                className="underline font-semibold"
              >
                Regialhabib
              </a>
            </li>
            <li>
              Instagram -{" "}
              <a
                href="https://www.instagram.com/regialhabib_/"
                className="underline font-semibold"
              >
                regialhabib_
              </a>
            </li>
            <li>
              Linkedln -{" "}
              <a href="#" className="underline font-semibold">
                Regi Al Habib
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
