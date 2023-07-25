import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import proj1 from "./images/shopping.jpeg";
import proj2 from "./images/todoapp.jpeg";
import proj3 from "./images/table.jpeg";
import proj4 from "./images/work1.jpeg";
import proj5 from "./images/work2.jpeg";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mt-8">
          <div>
            <div
              data-aos="fade-up"
              className="p-1 shadow-2xl rounded-3xl w-80 bg-slate-300 shadow-cyan-500/100"
            >
              <div className="flex flex-col justify-center">
                <img
                  src={proj1}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold">E-Commerce Website</h3>
              </div>
              <div className="flex justify-center mt-2 font-serif text-base">
                <p className="px-4 text-white rounded-full bg-slate-900">
                  2022
                </p>
                <p className="px-4 ml-2 text-white rounded-full bg-slate-900">
                  Web App
                </p>
              </div>
              <p className="m-2 font-serif text-sm leading-6 ">
                Created a Complete Responsive E-commerce WebApp using React ,
                Javascript, HTML, Tailwind CSS and Other Libraries like Formik
                and Yup.
              </p>
              <div className="flex flex-row my-6 justify-evenly">
                <a
                  target="_blank"
                  href="https://bazzaar.netlify.app"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  View
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Niteshsinghbisht03/bazaar.com"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div
              data-aos="fade-up"
              className="p-1 shadow-2xl rounded-3xl w-80 bg-slate-300 shadow-cyan-500/100"
            >
              <div className="flex flex-col justify-center">
                <img
                  src={proj2}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold">To-Do App</h3>
              </div>
              <div className="flex justify-center mt-2 font-serif text-base">
                <p className="px-4 text-white rounded-full bg-slate-900">
                  2022
                </p>
                <p className="px-4 ml-2 text-white rounded-full bg-slate-900">
                  Web App
                </p>
              </div>
              <p className="m-2 font-serif text-sm leading-6 grow ">
                Created a Complete To-Do WebApp using React , Javascript, HTML,
                Tailwind CSS and Other Libraries with basic funtion like adding
                task and deleting task when completed.
              </p>
              <div className="flex flex-row my-6 justify-evenly">
                <a
                  target="_blank"
                  href="https://letsdotask.netlify.app/"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  View
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Niteshsinghbisht03/ToDo-App"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="p-1 shadow-2xl rounded-3xl w-80 bg-slate-300 shadow-cyan-500/100"
            >
              <div className="flex flex-col justify-center ">
                <img
                  src={proj3}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold">Table Creater</h3>
              </div>
              <div className="flex justify-center mt-2 font-serif text-base">
                <p className="px-4 text-white rounded-full bg-slate-900">
                  2022
                </p>
                <p className="px-4 ml-2 text-white rounded-full bg-slate-900">
                  Web App
                </p>
              </div>
              <p className="m-2 font-serif text-sm leading-6 ">
                Created a Complete Responsive Table Creater WebApp using React ,
                Javascript, HTML, Tailwind CSS and provide the feature to create
                the table upto your choice.
              </p>
              <div className="flex flex-row my-6 justify-evenly">
                <a
                  target="_blank"
                  href="https://table-by-react.netlify.app"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  View
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Niteshsinghbisht03/Table"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="">
            <div
              data-aos="fade-up"
              className="p-1 shadow-2xl rounded-3xl w-80 bg-slate-300 shadow-cyan-500/100"
            >
              <div className="flex flex-col justify-center">
                <img
                  src={proj4}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold">CodeYogi Clone</h3>
              </div>
              <div className="flex justify-center mt-2 font-serif text-base">
                <p className="px-4 text-white rounded-full bg-slate-900">
                  2022
                </p>
                <p className="px-4 ml-2 text-white rounded-full bg-slate-900">
                  Web Page
                </p>
              </div>
              <p className="m-2 font-serif text-sm leading-6 ">
                Created a Complete Responsive CodeYogi clone Webpage using HTML,
                Tailwind CSS .Learn the use of flex,grid,position of elemnets
                using Tailwind Css.
              </p>
              <div className="flex flex-row my-6 justify-evenly">
                <a
                  target="_blank"
                  href="codeyogi-clone-by-nitesh.netlify.app"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  View
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Niteshsinghbisht03/CodeyogiApp"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="p-1 shadow-2xl rounded-3xl w-80 bg-slate-300 shadow-cyan-500/100"
            >
              <div className="flex flex-col justify-center ">
                <img
                  src={proj5}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold">Flex Card</h3>
              </div>
              <div className="flex justify-center mt-2 font-serif text-base">
                <p className="px-4 text-white rounded-full bg-slate-900">
                  2023
                </p>
                <p className="px-4 ml-2 text-white rounded-full bg-slate-900">
                  Web Page
                </p>
              </div>
              <p className="m-2 font-serif text-sm leading-6 ">
                Created a Complete Responsive flex Card WebPage using HTML,
                Tailwind CSS and Learn the use of flex,grid,position of elemnets
                using Basic Css.
              </p>
              <div className="flex flex-row my-6 justify-evenly">
                <a
                  target="_blank"
                  href="https://fluffy-custard-0d7381.netlify.app"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  View
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Niteshsinghbisht03/Flexcard"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up"
              className="p-1 shadow-2xl rounded-3xl w-80 bg-slate-300 shadow-cyan-500/100"
            >
              <div className="flex flex-col justify-center">
                <img
                  src={proj1}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold">Landing Page</h3>
              </div>
              <div className="flex justify-center mt-2 font-serif text-base">
                <p className="px-4 text-white rounded-full bg-slate-900">
                  2022
                </p>
                <p className="px-4 ml-2 text-white rounded-full bg-slate-900">
                  Web Page
                </p>
              </div>
              <p className="m-2 font-serif text-sm leading-6 ">
                Created a Complete Responsive flex Card WebPage using HTML,
                Tailwind CSS and Google Font.Learn the use of flex,grid,position
                of elements using Tailwind Css.
              </p>
              <div className="flex flex-row my-6 justify-evenly">
                <a
                  target="_blank"
                  href=""
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  View(Yet To Deploy)
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Niteshsinghbisht03/codsoft-level1-Task1"
                  className="px-3 py-1 text-lg font-medium leading-7 text-white rounded-full bg-rose-500 hover:bg-rose-600"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
