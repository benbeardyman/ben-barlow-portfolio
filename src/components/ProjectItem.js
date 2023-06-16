import { Icon } from '@iconify/react'

const ProjectItem = ({ name, description, image, url, technologies }) => {
    
    const technologiesArray = technologies.map((technology, index) => {
        if (technology.iconName === 'firebase') {
            return (
                <Icon
                    key={index}
                    icon={'logos:firebase'}
                    alt={technology.name}
                    className="w-12 h-12 ml-4 mt-2"
                />
            )
        } else {
            return (
                <div className="relative">
                  
                    <Icon
                        key={index}
                        icon={'skill-icons:' + technology.iconName}
                        className="w-12 h-12 ml-4 mt-2"
                    />
                
                    <div className="opacity-0 hover:opacity-100  absolute inset-100 x-20 text-6sm text-black font-primary">{technology.name}</div>
                </div>
            )
        }
    })
    

    return (
        <div className="flex justify-center w-screen snap-center shrink-0">
            <div className="flex w-11/12 bg-clotted-cream border-4 border-coral rounded-xl justify-between">
                <div className="flex flex-col justify-center items-start">
                    <div className="flex items-center justify-center">
                        <h3 className="px-4 pt-4 font-header text-lg">{name}</h3>
                        <a href={url} target="_blank" rel="noreferrer" className="pb-4 text-coral">
                            <Icon
                            icon="bi:github"
                            className="h-10 w-10"
                            />
                        </a>
                    </div>
                    <p className="px-4 font-primary">{description}</p>
                    <h4 className="px-4 pt-4 m-0 font-header">Tech:</h4>
                    <div className="flex">{technologiesArray}</div>    
                </div>
                
                <img src={process.env.PUBLIC_URL + "/" + image} className="self-center max-h-full rounded-tr-lg rounded-br-lg"/>
            </div>
        </div>
    )
}

export default ProjectItem