import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { Icon } from "@iconify/react";

const Projects = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const scrollDown = () => {
    const contactComponent = document.getElementById("contact");
    contactComponent.scrollIntoView({ behavior: "smooth" });
  };

  // const scrollLeft = () => {
  //     const slider = document.getElementById('projects-slider')
  //     //need to make dynamic - scrollTo would be better
  //     slider.scrollLeft = slider.scrollLeft -1000
  // }

  // const scrollRight = () => {
  //     const slider = document.getElementById('projects-slider')
  //      //need to make dynamic - scrollTo would be better
  //     slider.scrollLeft = slider.scrollLeft +1000
  // }

  const scrollLeft = () => {
    setCurrentProjectIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setCurrentProjectIndex((prevIndex) =>
      Math.min(prevIndex + 1, projects.length - 1)
    );
  };

  const projectsArray = projects.map((project, index) => {
    return (
      <ProjectItem
        key={project.id}
        index={index}
        name={project.name}
        description={project.description}
        image={project.img}
        url={project.url}
        technologies={project.technologies}
        currentIndex={currentProjectIndex}
      />
    );
  });

  return (
    <div
      id="projects"
      className="relative flex min-h-screen flex-col justify-center"
    >
      <div className="flex items-center">
        <Icon
          icon="bxs:left-arrow"
          onClick={scrollLeft}
          color="#ff9c99"
          className="ml-1 h-8 w-8 cursor-pointer opacity-50 hover:opacity-100 md:ml-4 md:h-12 md:w-12 lg:ml-16"
        />

        <div
          id="projects-slider"
          className="no-scrollbar relative flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth"
        >
          {projectsArray[currentProjectIndex]}
        </div>
        <Icon
          icon="bxs:right-arrow"
          onClick={scrollRight}
          color="#ff9c99"
          className="mr-1 h-8 w-8 cursor-pointer opacity-50 hover:opacity-100 md:mr-4 md:h-12 md:w-12 lg:mr-16"
        />
        <div className="absolute bottom-0 left-0 right-0 mb-8 flex justify-center">
          <Icon
            icon="simple-line-icons:arrow-down"
            onClick={scrollDown}
            color="#ff9c99"
            className="h-10 w-10 animate-fade cursor-pointer opacity-70 hover:opacity-100 md:h-12 md:w-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
