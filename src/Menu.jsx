import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaAward, FaProjectDiagram } from "react-icons/fa";
import { FcParallelTasks } from "react-icons/fc";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
const Menu = () => {
  return (
    <div className="flex flex-col items-end">
      <ul className="flex px-6 py-2 space-x-10 text-gray-300 bg-gray-700 rounded-3xl">
        <li className="flex flex-row items-center cursor-pointer hover:text-white hover:animate-pulse">
          <Link to={"/"}>About</Link>
          <BsFillPersonFill className={"text-sky-500"} />
        </li>
        <li className="flex flex-row items-center cursor-pointer hover:text-white hover:animate-pulse ">
          <Link to={"/Skills"}>
            <h1>Skills</h1>
          </Link>
          <FaAward className={"text-sky-500"} />
        </li>
        <li className="flex flex-row items-center cursor-pointer hover:text-white hover:animate-pulse">
          <Link to={"/Projects"}>Project </Link>
          <FcParallelTasks />
        </li>
        <li className="flex flex-row items-center cursor-pointer hover:text-white hover:animate-pulse">
          <Link to={"/Connect"}>Connect</Link>
          <BiSolidPhoneCall className={"text-sky-500"} />
        </li>
        <li className="flex flex-row items-center px-2 font-medium text-white border rounded-full cursor-pointer hover:bg-white hover:text-sky-500 bg-sky-500">
          <a
            href="https://drive.google.com/file/d/11dyIIOkw_lt-Hl420WZw2rpTomkKaD6R/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
          <FaClipboardList className={"text-black"} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
