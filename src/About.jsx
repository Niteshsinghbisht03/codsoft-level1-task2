import React, { useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <div className="flex flex-col min-h-screen pb-6 space-y-6 pt-36">
        <div data-aos="fade-up" className="w-20">
          <img
            src="./src/images/Portfolionew.jpg"
            alt="my-image"
            className="object-cover w-full h-full rounded-full aspect-square"
          />
        </div>
        <div>
          <h1
            data-aos="fade-right"
            className="font-serif text-white text-8xl bold "
          >
            Full Stack Developer and Designer.
          </h1>
        </div>
        <div>
          <p data-aos="fade-left" className="font-sans text-2xl text-gray-400">
            Hii,I am Nitesh Singh Bisht ,a Second year B.Tech Student pursuing
            Computer Science and engineering.I am open to Project collaboration
            and Intenship Opportunities.
          </p>
        </div>
        <div className="flex flex-row justify-start space-x-10">
          <a
            href="https://www.linkedin.com/in/nitesh-singh-bisht-7a0914219/"
            target="_blank"
            className="text-3xl text-gray-400 hover:animate-bounce hover:text-blue-900"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/Niteshsinghbisht03"
            target="_blank"
            className="ml-4 text-3xl text-gray-400 hover:text-white hover:animate-bounce"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/NiteshSinghbish"
            target="_blank"
            className="ml-4 text-3xl text-gray-400 hover:animate-bounce hover:text-blue-700"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.instagram.com/nitesh_singh_bisht_/"
            target="_blank"
            className="ml-4 text-3xl text-gray-400 hover:text-[#fb3958] hover:animate-bounce"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
