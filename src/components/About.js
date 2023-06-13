import pixelMug from "../images/pixel_mug.jpg"

const About = () => {

    return (
        <div id="about" className="flex flex-col items-center justify-center min-h-screen w-screen">
            <div className="flex flex-col flex-wrap justify-center items-center min-h-50 w-3/4 bg-clotted-cream border-4 border-coral rounded-3xl">
                <h3 className="pt-8 px-16 text-center font-header text-lg">
                    I am a naturally inquisitive newly qualified Software Developer with extensive experience in retail and hospitality. 
                </h3>
                <p className="pt-4 px-16 text-center font-primary">
                    For the past 5 years I worked in a dynamic team growing a street food startup into a flourishing multi-location business. This experience honed skills in communication, collaboration and analysis  whilst also giving me the opportunity to be creative through branding, marketing and web-design.
                    <br/>
                    Driven by my fascination with the inner workings of software systems I've used previously, I chose the CodeClan bootcamp to pursue a new career in technology. I am now excitedly looking for my first role using my new skills.
                    
                </p>
                <img src={pixelMug} className="border-4 border-black rounded-full h-32 mb-8 mt-6 " />
            </div>
        </div>
    )

}

export default About