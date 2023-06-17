import { Icon } from '@iconify/react'


const ProjectItem = ({ name, description, image, url, technologies, index}) => {
    
    const technologiesArray = technologies.map((technology, index) => {
        if (technology.iconName === 'firebase') {
            return (
                <div className='group flex flex-col justify-center items-center'>
                    <Icon
                        key={index}
                        icon={'logos:firebase'}
                        className="w-12 h-12 ml-4 mt-2"
                    />
                    <span className='opacity-0 group-hover:opacity-100 absolute bg-white text-black text-sm py-1 px-2 rounded-md font-primary'>
                        {technology.name}
                    </span>
                </div>
            )
        } else {
            return (
                <div className='group flex flex-col justify-center items-center'>
                    <Icon
                        key={index}
                        icon={'skill-icons:' + technology.iconName}
                        className="w-12 h-12 ml-4 mt-2"
                    />
                    <span className='opacity-0 group-hover:opacity-100 absolute bg-white text-black text-sm py-1 px-2 rounded-md font-primary'>
                        {technology.name}
                    </span>
                </div>
            );
        }
    })

    return (
        <div className='flex justify-center w-screen snap-center shrink-0'>
            <div className='flex flex-col w-3/4 bg-clotted-cream border-4 border-coral rounded-xl'>
                <img src={process.env.PUBLIC_URL + "/" + image} className='self-center border-2 border-gray-500 w-3/5 m-4 rounded-lg'/>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center justify-center'>
                        <h3 className='px-4 pt-4 pb-6 font-header text-lg'>{name}</h3>
                        <a href={url} target="_blank" rel="noreferrer" className='pb-4'>
                            <Icon
                            icon="bi:github"
                            className='h-10 w-10'
                            />
                        </a>
                    </div>
                    <p className='px-16 font-primary'>{description}</p>
                    <h4 className='px-4 pt-4 m-0 font-header'>Built With:</h4>
                    <div className='flex flex-wrap mb-4'>{technologiesArray}</div>    
                </div>
                
                
            </div>
        </div>
    )
    
}

export default ProjectItem