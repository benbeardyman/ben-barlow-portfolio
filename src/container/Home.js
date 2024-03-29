import { useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"
import Title from "../components/Title"
import projectsData from "../data/ProjectData"

const Home = () => {
    
    const [projects, setProjects] = useState(projectsData)

    return (
        <div className="h-screen overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar">
            
            <div className="h-screen snap-center">
                <Title/>
            </div>

            <div className="h-screen snap-center">
                <div id="about-tech-slider" className="relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar">
                    <div id="about" className="w-screen snap-center">
                        <About /> 
                    </div>
                    <div id="tech" className="w-screen snap-center">
                        <TechStack/>
                    </div>
                </div>
            </div>

            <div id="projects" className="h-screen snap-center">
                <Projects projects={projects}/>
            </div>

            <div id="contact" className="h-screen snap-center">
                <Contact/>
            </div>
        </div>
    )

}

export default Home