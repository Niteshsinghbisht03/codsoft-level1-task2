import { React, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { DiNodejs, DiDjango } from "react-icons/di";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import {
  BiLogoGit,
  BiLogoTailwindCss,
  BiLogoRedux,
  BiFastForward,
} from "react-icons/bi";

import Menu from "./Menu";
import Aos from "aos";
import "aos/dist/aos.css";

function SkillPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="min-h-screen" id="#Skills">
        {/* <BackButton />
          <AiOutlineArrowRight /> */}
        <div data-aos="fade-up" className="pt-12">
          <h2 className="font-serif text-6xl font-semibold text-center text-gray-200">
            Skills Proficiency
          </h2>
        </div>
        <div className="flex flex-col py-12 text-9xl">
          <div className="flex flex-row flex-wrap justify-around">
            <div data-aos="fade-right">
              <FaReact
                className={
                  "border border-solid border-cyan-800 hover:animate-spin shadow-2xl text-sky-400 rounded-3xl shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="h-4 my-4 border rounded-lg w-28 bg-sky-500"></div>
              </div>
            </div>
            <div data-aos="fade-right" className="text-green-600 ">
              <DiNodejs
                className={
                  "border border-solid border-cyan-800 shadow-2xl  rounded-3xl shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="w-20 h-4 my-4 border rounded-lg bg-sky-500"></div>
              </div>
            </div>
            <div data-aos="fade-right" className="text-green-800 ">
              <BiLogoMongodb
                className={
                  "border border-solid border-cyan-800 shadow-2xl  rounded-3xl shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="w-20 h-4 my-4 border rounded-lg bg-sky-500"></div>
              </div>
            </div>
            <div data-aos="fade-right" className="text-purple-600">
              <BiLogoRedux
                className={
                  "border border-solid border-cyan-800 shadow-2xl  rounded-3xl shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="w-24 h-4 my-4 border rounded-lg bg-sky-500"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-around py-8">
            <div data-aos="fade-left" className="text-sky-600">
              <TbBrandTypescript
                className={
                  "border border-solid border-cyan-800 shadow-2xl  rounded-3xl shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="h-4 my-4 border rounded-lg w-28 bg-sky-500"></div>
              </div>
            </div>
            <div data-aos="fade-left">
              <TbBrandJavascript
                className={
                  "border border-solid border-cyan-800 text-yellow-600 shadow-2xl  rounded-3xl shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="h-4 my-4 border rounded-lg w-28 bg-sky-500"></div>
              </div>
            </div>
            <div data-aos="fade-left" className="text-orange-800">
              <BiLogoGit
                className={
                  " border border-solid border-cyan-800 shadow-2xl  rounded-3xl shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="w-24 h-4 my-4 border rounded-lg bg-sky-500"></div>
              </div>
            </div>
            <div data-aos="fade-left" className="text-sky-500">
              <BiLogoTailwindCss
                className={
                  "border border-solid border-cyan-800 rounded-3xl shadow-2xl  shadow-cyan-500/50"
                }
              />
              <div className="w-32 h-4 my-4 bg-white border-black rounded-lg">
                <div className="h-4 my-4 border rounded-lg w-28 bg-sky-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
