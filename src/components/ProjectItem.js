import styled from "styled-components"

const ProjectItem = ({name, description, image, url}) => {

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-around;
        height: 200px;
        width: 200px;
        background-color: #e8e4e6;
        border:5px solid;
        border-radius: 15px;
        border-color: #001e1d;
    `

    return (
        <Wrapper>
            <li>
                <p>{name}</p>
                <p>{description}</p>
            </li>
        </Wrapper>
    )
}

export default ProjectItem