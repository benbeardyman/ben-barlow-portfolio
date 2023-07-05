import { Icon } from "@iconify/react";

const ProjectItem = ({
  name,
  description,
  image,
  url,
  technologies,
  index,
  currentIndex,
}) => {
  const technologiesArray = technologies.map((technology, index) => {
    if (technology.iconName === "firebase") {
      return (
        <div className="group flex flex-col items-center justify-center">
          <Icon
            key={index}
            icon={"logos:firebase"}
            className="mx-1 mt-2 h-8 w-8 md:mx-2 md:h-12 md:w-12"
          />
          <span className="absolute rounded-md bg-white px-2 py-1 font-primary text-sm text-black opacity-0 group-hover:opacity-100">
            {technology.name}
          </span>
        </div>
      );
    } else {
      return (
        <div className="group flex flex-col items-center justify-center">
          <Icon
            key={index}
            icon={"skill-icons:" + technology.iconName}
            className="mx-1 mt-2 h-8 w-8 md:mx-2 md:h-12 md:w-12"
          />
          <span className="absolute rounded-md bg-white px-2 py-1 font-primary text-sm text-black opacity-0 group-hover:opacity-100">
            {technology.name}
          </span>
        </div>
      );
    }
  });

  const isActive = index === currentIndex;

  return (
    <div
      className={`flex w-screen shrink-0 snap-center justify-center ${
        isActive ? "active" : ""
      }`}
    >
      <div className="flex w-10/12 flex-col rounded-xl border-2 border-coral bg-clotted-cream md:border-4 lg:w-3/4">
        <img
          src={process.env.PUBLIC_URL + "/" + image}
          alt="project specific"
          className="m-4 w-11/12 self-center rounded-lg border-2 border-gray-500 lg:w-3/5"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <h3 className="px-4 pb-4 pt-2 font-header text-lg md:pb-6 md:pt-4 md:text-xl">
              {name}
            </h3>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="pb-2 md:pb-4"
            >
              <Icon icon="bi:github" className="h-8 w-8 md:h-10 md:w-10" />
            </a>
          </div>
          <p className="px-4 font-primary text-sm md:px-16 md:text-base">
            {description}
          </p>
          <h4 className="m-0 px-4 pt-4 font-header md:text-lg">Built With:</h4>
          <div className="mb-4 flex flex-wrap">{technologiesArray}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
