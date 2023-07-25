import React from "react";
import Project from "./Project";

function ProjectPage() {
  return (
    <div className="px-16 pt-4">
      <div>
        <h2 className="p-4 font-serif text-6xl font-semibold text-center text-gray-300">
          Recent Projects
        </h2>
        <Project />
      </div>
    </div>
  );
}

export default ProjectPage;
