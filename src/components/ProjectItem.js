const ProjectItem = ({ name, description, image, url }) => {

    return (
        <div className="flex justify-center w-screen snap-center shrink-0">
            <div className="flex w-11/12 bg-clotted-cream border-4 border-coral rounded-xl justify-between">
                <div className="flex flex-col justify-evenly items-start">
                    <h3 className="px-4 pt-4 m-0">{name}</h3>
                    <p className="px-4">{description}</p>
                    <a href={url} target="_blank" rel="noreferrer" className="px-4 pb-4 no-underline font-semibold text-coral">GitHub</a>
                </div>
                <img src={process.env.PUBLIC_URL + "/" + image} className="self-center max-h-full rounded-tr-lg rounded-br-lg"/>
            </div>
        </div>
    )
}

export default ProjectItem