import { Icon } from '@iconify/react'

const ProjectItem = ({ name, description, image, url }) => {

    return (
        <div className="flex justify-center w-screen snap-center shrink-0">
            <div className="flex w-11/12 bg-clotted-cream border-4 border-coral rounded-xl justify-between">
                <div className="flex flex-col justify-center items-start">
                    <div className="flex items-start">
                        <h3 className="px-4 pt-4 m-0 font-header text-lg">{name}</h3>
                        <a href={url} target="_blank" rel="noreferrer" className="pb-4 text-coral">
                            <Icon
                            icon="bi:github"
                            className="h-10 w-10"
                            />
                        </a>
                    </div>
                    <p className="px-4 font-primary">{description}</p>
                    <h4 className="px-4 pt-4 m-0 font-header">Tech:</h4>
                </div>
                
                <img src={process.env.PUBLIC_URL + "/" + image} className="self-center max-h-full rounded-tr-lg rounded-br-lg"/>
            </div>
        </div>
    )
}

export default ProjectItem