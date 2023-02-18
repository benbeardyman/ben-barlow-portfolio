import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 25%;
    width:85%;
    background-color: #e8e4e6;
    border:4px solid;
    border-radius: 15px;
    border-color: #e16162;
`

const ItemHead = styled.h3`
    padding-left: .5rem;
`

const ItemText = styled.p`
    padding: .5rem;
`

const ProjectItem = ({ name, description, image, url }) => {

    return (
        <Wrapper>
                <ItemHead>{name}</ItemHead>
                <ItemText>{description}</ItemText>
        </Wrapper>
    )
}

export default ProjectItem