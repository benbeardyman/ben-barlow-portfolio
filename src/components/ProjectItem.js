const ProjectItem = ({ name, description, image, url }) => {

    return (
        <div className="flex h-1/4 w-3/4 bg-clotted-cream border-4 border-coral rounded-xl">
            <div className="flex flex-col justify-evenly items-start">
                <h3 className="px-4 pt-4 m-0">{name}</h3>
                <p className="px-4">{description}</p>
                <a href={url} target="_blank" className="px-4 pb-4 no-underline font-semibold text-coral">GitHub</a>
            </div>
            <img src={process.env.PUBLIC_URL + "/" + image} className="self-center max-h-full rounded-tr-lg rounded-br-lg"/>
        </div>
    )
}

export default ProjectItem