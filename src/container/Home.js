import { useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import styled from "styled-components"
import projectsData from "../data/ProjectData"




const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {
    
    const [projects, setProjects] = useState(projectsData)

    return (
        <Wrapper>
            <About />
            <Projects projects={projects} />
            <Contact />
        </Wrapper>
    )

}

export default Home