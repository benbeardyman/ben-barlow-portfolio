import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    /* align-items: stretch;
    justify-content: center; */
    flex-grow: 1;
    /* justify-content: space-around; */
    /* height: 300px; */
    background-color: #e8e4e6;
    border:4px solid;
    border-radius: 15px;
    border-color: #e16162;
`
// const ProjectWrapper = styled.li`
//     display: flex;
//     padding: 20px;
// `

const ItemHead = styled.h3`
    padding: .75rem;
`

const ItemText = styled.p`
    padding: .75rem;
`

const ProjectItem = ({ name, description, image, url }) => {

    return (
        <Wrapper>
            {/* <ProjectWrapper> */}
                <ItemHead>{name}</ItemHead>
                <ItemText>{description}</ItemText>
            {/* </ProjectWrapper> */}
        </Wrapper>
    )
}

export default ProjectItem