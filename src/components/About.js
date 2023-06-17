import { Icon } from '@iconify/react'
import pixelMug from "../images/pixel_mug.jpg"

const About = () => {

    const scrollDown = () => {
        const projectsComponent = document.getElementById('projects')
        projectsComponent.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollRight = () => {
        const techComponent = document.getElementById('tech')
        techComponent.scrollIntoView({ behavior: 'smooth' })
    } 

    return (
        <div id="about" className='flex flex-col items-center justify-center min-h-screen w-screen relative'>
            <div className='flex flex-col flex-wrap justify-center items-center min-h-50 w-10/12 lg:w-3/4 bg-clotted-cream border-2 md:border-4 border-coral rounded-3xl mb-4 md:mb-10'>
                <h3 className="pt-2 md:pt-4 px-16 text-center font-header text-lg md:text-xl">
                    About Me
                </h3>

                <div className="flex flex-col items-center md:flex-row md:items-start">
                    <img src={pixelMug} className='border-2 md:border-4 border-black rounded-full h-14 w-14 md:h-40 md:w-40 mt-1 md:mt-4 md:ml-4 lg:ml-8'/>
                    <div className='flex flex-col pt-2 md:pt-4 mb-2 md:mb-4'>
                        <p className='px-4 lg:px-16 text-left font-header text-sm md:text-lg'>
                            I am a naturally inquisitive newly qualified Software Developer with extensive experience in retail and hospitality. 
                        </p>
                        <p className='pt-1 md:pt-4 px-4 lg:px-16 text-left font-primary text-xs md:text-base'>
                            For the past 5 years I worked in a dynamic team growing a street food startup into a flourishing multi-location business. This experience honed skills in communication, collaboration and analysis  whilst also giving me the opportunity to be creative through branding, marketing and web-design.
                        <br/>
                            Driven by my fascination with the inner workings of software systems I've used previously, I chose the CodeClan bootcamp to pursue a new career in technology. I am now looking for an opportunity where I can continue to develop my knowledge and capabilities
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col flex-wrap justify-center items-center min-h-50 w-10/12 lg:w-3/4 bg-clotted-cream border-2 md:border-4 border-coral rounded-3xl'>
                <h3 className='pt-2 md:pt-4 px-16 text-center font-header text-lg md:text-xl'>
                    Experience 
                </h3>
                <h4 className='pt-1 md:pt-4 md:px-16 text-center font-header text-sm md:text-xl'>
                    CodeClan - Professional Software Development 
                </h4>
                <p className='px-4 md:px-16 text-center font-primary text-sm md:text-base'>
                    November 2022 - March 2023
                </p>
                <p className='pt-1 md:pt-4 px-4 lg:px-16 font-primary text-xs md:text-base text-center'>
                    Intensive SQA Level 8 accredited course focused on obtaining the fundamental knowledge and key skills to move into a career in Software Development.
                    <br/>
                    <button onClick={scrollRight} className='mb-2 md:mb-4'>TECH STACK {">"}</button>
                </p>
            </div>
            <div className="absolute bottom-0 mb-2 md:mb-8" >
            <Icon
                    icon="simple-line-icons:arrow-down"
                    onClick={scrollDown}
                    color="#ff9c99"
                    className="h-10 w-10 md:h-12 md:w-12 opacity-70 cursor-pointer hover:opacity-100 animate-fade" 
                />
            </div>
        </div>
    )

}

export default About