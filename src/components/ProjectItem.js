import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    height: 25%;
    width:85%;
    background-color: #e8e4e6;
    border:4px solid;
    border-radius: 15px;
    border-color: #e16162;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const Name = styled.h3`
    padding-left: 1rem;
    padding-top: 1rem;
    margin: 0;
`

const Description = styled.p`
    padding-left: 1rem;
`

const Url = styled.a`
    padding-left: 1rem;
    padding-bottom: 1rem;
    text-decoration: none;
    font-weight: 600;
    color: #e16162;
`

const Image = styled.img`
    align-self: center;
    margin: 1rem;
    height: 10rem;
`

const ProjectItem = ({ name, description, image, url }) => {
    console.log({ image })
    return (
        <Wrapper>
            <Details>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Url href={url} target="_blank">GitHub</Url>
            </Details>
            <Image src={process.env.PUBLIC_URL + "/" + image} />
        </Wrapper>
    )
}

export default ProjectItem