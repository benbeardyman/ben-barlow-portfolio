import { Icon } from '@iconify/react'


const ProjectItem = ({ name, description, image, url, technologies, index}) => {
    
    const technologiesArray = technologies.map((technology, index) => {
        if (technology.iconName === 'firebase') {
            return (
                <div className='group flex flex-col justify-center items-center'>
                    <Icon
                        key={index}
                        icon={'logos:firebase'}
                        className='w-8 h-8 md:w-12 md:h-12 mx-1 md:mx-2 mt-2'
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
                        className='w-8 h-8 md:w-12 md:h-12 mx-1 md:mx-2 mt-2'
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
            <div className='flex flex-col w-10/12 lg:w-3/4 bg-clotted-cream border-2 md:border-4 border-coral rounded-xl'>
                <img src={process.env.PUBLIC_URL + "/" + image} className='self-center border-2 border-gray-500 w-11/12 lg:w-3/5 m-4 rounded-lg'/>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center justify-center'>
                        <h3 className='px-4 pt-2 md:pt-4 pb-4 md:pb-6 font-header text-lg md:text-xl'>{name}</h3>
                        <a href={url} target="_blank" rel="noreferrer" className='pb-2 md:pb-4'>
                            <Icon
                            icon="bi:github"
                            className='h-8 w-8 md:h-10 md:w-10'
                            />
                        </a>
                    </div>
                    <p className='px-4 md:px-16 font-primary text-sm md:text-base'>{description}</p>
                    <h4 className='px-4 pt-4 m-0 font-header md:text-lg'>Built With:</h4>
                    <div className='flex flex-wrap mb-4'>{technologiesArray}</div>    
                </div>
                
                
            </div>
        </div>
    )
    
}

export default ProjectItem