import pixelMug from "../images/pixel_mug.jpg"

const About = () => {

    return (
        <div id="about" className="flex flex-col items-center justify-center min-h-screen w-screen">
            <div className="flex flex-col flex-wrap justify-center items-center min-h-50 w-3/4 bg-clotted-cream border-4 border-coral rounded-3xl mb-10">
                <h3 className="pt-8 px-16 text-center font-header text-xl">
                    About Me
                </h3>
                <p className="pt-8 px-16 text-center font-header text-lg">
                    I am a naturally inquisitive newly qualified Software Developer with extensive experience in retail and hospitality. 
                </p>
                <p className="pt-4 px-16 text-center font-primary">
                    For the past 5 years I worked in a dynamic team growing a street food startup into a flourishing multi-location business. This experience honed skills in communication, collaboration and analysis  whilst also giving me the opportunity to be creative through branding, marketing and web-design.
                    <br/>
                    Driven by my fascination with the inner workings of software systems I've used previously, I chose the CodeClan bootcamp to pursue a new career in technology. I am now looking for an opportunity where I can continue to develop my knowledge and capabilities
                </p>
                <img src={pixelMug} className="border-4 border-black rounded-full h-32 mb-8 mt-6 " />
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center min-h-50 w-3/4 bg-clotted-cream border-4 border-coral rounded-3xl">
                <h3 className="pt-8 px-16 text-center font-header text-xl">
                    Experience 
                </h3>
                <h4 className="pt-8 px-16 text-center font-header text-xl">
                    CodeClan - Professional Software Development 
                </h4>
                <p className="px-16 text-center font-primary mb-4">
                    November 2022 - March 2023
                </p>
                <p className="px-16 text-center font-primary mb-8">
                    Intensive SQA Level 8 accredited course focused on obtaining the fundamental knowledge and key skills to move into a career in Software Development.
                    <br/>
                    TECH STACK {">"}
                </p>
            </div>
        </div>
    )

}

export default About