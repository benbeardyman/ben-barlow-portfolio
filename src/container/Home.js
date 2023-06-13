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
                <About/>
            </div>

            <div className="h-screen snap-center">
                <TechStack/>
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