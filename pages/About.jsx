/* eslint-disable react/no-unescaped-entities */
import PageLayout from "../src/components/Layouts/PageLayout";

const AboutPage = () => {
  return (
    <>
      <PageLayout>
        <main  className="flex flex-col  py-20 w-full max-w-5xl px-10 gap-6 md:mx-auto lg:px-0">
          <div className="md:flex flex-row-reverse ">
            <div className="w-full flex justify-center mb-5">
              <img
                src="./img/1.JPG"
                alt=""
                className="h-48 w-48 object-cover md:mt-1 rounded-full border-2 border-purple-300 "
              ></img>
            </div>
            <div >
              <div className="flex flex-col gap-2 md:mb-4">
                <h1 className="font-bold text-4xl dark:text-gray-50  ">About Me</h1>
                <p className="text-xl text-purple-700 dark:text-purple-500 font-medium">Regialhabib</p>
              </div>
              <div className="flex flex-col gap-3 font-medium dark:text-gray-50  ">
                <p>
                  Hi everyone, my name is Regi Al Habib. I'm a Web Developer,
                  Computer Science Student,
                </p>
                <p>
                  I live in jambi, Indonesia. I was born in Jakarta, 30 November
                  2002. I'm 21 years old. I'm a Computer Science Student from
                  Uin Sulthan Thaha Saiffudin Jambi.
                </p>
                <p>
                  years old, and I love computer since I was a kid. Besides
                  coding, I love listening to music. My favorite genres are Pop
                  Punk, Post-hardcore, Metalcore, Nu-metal, and Electronicore. I
                  like playing games too. My favorite genre is First Person
                  Shooter
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex">
            <div className="flex flex-col gap-3 md:gap-5" >
              <h1 className="font-bold text-4xl dark:text-gray-50" >Education</h1>
              <div className="flex flex-col gap-2   "> 
                <div className="flex gap-2 items-center" >
                  <div className="rounded-full border-4 border-purple-700 dark:border-purple-400 h-5 w-5"></div>
                  <p className="font-semibold text-xl dark:text-gray-50  ">High School</p>
                </div>
                <div className="px-7 flex flex-col gap-1" >
                  <p className=" text-sm  font-medium text-gray-700 dark:text-gray-400" >
                    SMA Negeri Bingin Teluk
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-400">IPA</p>
                  <p className="text-gray-500 dark:text-gray-400">2018 - 2021</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="rounded-full border-4 border-purple-700 dark:border-purple-400 h-5 w-5"></div>
                  <p className="font-semibold text-xl dark:text-gray-50  ">University</p>
                </div>
                <div className="px-7 flex flex-col gap-1">
                  <p className=" text-sm  font-medium text-gray-700 dark:text-gray-400">
                    Uin Sulthan Thaha Saiffudin Jambi
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                    Sistem Informasi
                  </p>
                  <p className="text-gray-500 dark:text-gray-400" >2021 - Present</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-5" >
              <h1 className="font-bold text-4xl dark:text-gray-50  ">Resume</h1>
              <p className="text-lg font-medium dark:text-gray-50  ">
                You Can Download My Resume{" "}
                <a href="#" className="text-purple-700 dark:text-purple-500 underline">
                  Here
                </a>
              </p>
            </div>
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default AboutPage;
