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
        <div>
            <Title />
            <About />
            <TechStack />
            <Projects projects={projects} />
            <Contact />
        </div>
    )

}

export default Home