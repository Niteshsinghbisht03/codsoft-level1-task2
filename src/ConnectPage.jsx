import React from "react";
import {
  AiOutlineHeart,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const ConnectPage = () => {
  return (
    <div className="min-h-screen px-5 pt-8">
      <h2 className="font-serif text-6xl font-semibold text-center text-gray-300 pb-7 ">
        Connect With Me
      </h2>
      <div className="grid grid-flow-col grid-cols-12 text-gray-200 gap-x-12">
        <div className="col-span-5 px-4 py-4 border border-solid shadow-lg border-cyan-500 rounded-3xl shadow-cyan-500/80">
          <h3 className="pb-5 text-4xl font-bold text-center ">
            Nitesh Singh Bisht
          </h3>
          <p className="pt-4 text-2xl font-semibold text-center">
            Feel free to get in touch with me.i am always open to discussing new
            projects ,ideas or opportunties to be a part of your vision.{" "}
          </p>
          <div className="flex flex-row items-center justify-center pt-4 text-2xl ">
            <p>Thank You </p>
            <AiOutlineHeart className={"text-red-500"} />
          </div>
          <div>
            <div className="flex flex-row items-center pt-4 text-2xl font-semibold font">
              <MdEmail />
              <span>Shoot me an Email:</span>
            </div>
            <a href="" className="text-2xl font-normal">
              niteshsinghbisht6398@gmail.com
            </a>
          </div>
          <div>
            <div className="flex flex-row items-center pt-4 text-2xl font-semibold font">
              <BiSolidPhoneCall />
              <span>Phone:</span>
            </div>
            <p className="text-2xl font-normal">+91-6398302762</p>
          </div>
          <div className="flex flex-row justify-center pt-8 space-x-6 ">
            <a
              href="https://www.linkedin.com/in/nitesh-singh-bisht-7a0914219/"
              target="_blank"
              className="text-6xl text-blue-900 hover:animate-bounce"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Niteshsinghbisht03"
              target="_blank"
              className="ml-4 text-6xl text-white hover:animate-bounce"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://twitter.com/NiteshSinghbish"
              target="_blank"
              className="ml-4 text-6xl text-blue-500 hover:animate-bounce"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.instagram.com/nitesh_singh_bisht_/"
              target="_blank"
              className="ml-4 text-6xl text-[#fb3958] hover:animate-bounce"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between col-span-7 px-4 py-4 border border-solid shadow-lg border-cyan-500 rounded-3xl shadow-cyan-500/80">
          <h3 className="text-4xl font-bold text-center ">
            Drop Your Message here-
          </h3>
          <input
            type="text"
            className="px-5 mt-8 text-xl border border-solid shadow-lg bg-slate-800 focus:outline-none border-cyan-400 focus:border-cyan-500 grow rounded-xl shadow-cyan-500/50"
            placeholder="Name"
          />
          <input
            type="email"
            className="px-5 mt-5 text-xl border border-solid shadow-lg bg-slate-800 focus:outline-none border-cyan-400 focus:border-cyan-500 grow rounded-xl shadow-cyan-500/50"
            placeholder="E-Mail"
          />
          <input
            type="text"
            className="px-5 mt-5 text-xl border border-solid shadow-lg bg-slate-800 focus:outline-none border-cyan-400 focus:border-cyan-500 grow rounded-xl shadow-cyan-500/50"
            placeholder="Subject"
          />
          <textarea
            type="text"
            className="px-5 mt-5 text-xl border border-solid shadow-lg bg-slate-800 focus:outline-none border-cyan-400 focus:border-cyan-500 grow rounded-xl shadow-cyan-500/50"
            placeholder="Your Message"
          />
          <button className="flex flex-row items-center justify-center mt-5 text-xl text-gray-400 border border-solid shadow-lg bg-slate-800 focus:outline-none border-cyan-400 focus:border-cyan-500 grow rounded-xl shadow-cyan-500/50 hover:bg-gray-700 hover:text-white">
            Send Message
            <AiOutlineArrowRight className={"text-3xl"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
