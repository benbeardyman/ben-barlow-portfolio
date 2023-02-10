import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 300px;
    width: 200px;
    background-color: #e8e4e6;
    border:5px solid;
    border-radius: 15px;
    border-color: #001e1d;
`
const ProjectWrapper = styled.li`
    display: flex;
`

const ItemHead = styled.h3`
    padding: .75rem;
`

const ItemText = styled.p`
    padding: .75rem;
`

const ProjectItem = ({ name, description, image, url }) => {

    return (
        <Wrapper>
            <ProjectWrapper>
                <ItemHead>{name}</ItemHead>
                <ItemText>{description}</ItemText>
            </ProjectWrapper>
        </Wrapper>
    )
}

export default ProjectItem