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
        <div className="h-screen overflow-x-hidden snap-y snap-mandatory scroll-smooth">
            
            <div className="h-screen snap-center">
                <Title/>
            </div>

            <div className="h-screen snap-center">
                <div id="about-tech-slider" className="relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth">
                    <div className="w-screen snap-center">
                        <About /> 
                    </div>
                    <div className="w-screen snap-center">
                        <TechStack/>
                    </div>
                </div>
            </div>

            <div className="h-screen snap-center">
                <Projects projects={projects}/>
            </div>

            <div className="h-screen snap-center">
                <Contact/>
            </div>
        </div>
    )

}

export default Home