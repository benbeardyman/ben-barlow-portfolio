import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    height: 27vh;
    width:70vw;
    background-color: #e8e4e6;
    border:4px solid;
    border-radius: 15px;
    border-color: #e16162;
    @media screen and (max-width: 991px) {
        flex-direction:column;
        justify-content: space-evenly;
        height:32vh;
        width:75vw;
    }
    @media screen and (max-width: 767px) {
        width:90vw;
    }
    @media screen and (max-width: 479px) {
        height:40vh;
    }

`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const Name = styled.h3`
    padding-left: 1rem;
    padding-right:1rem;
    padding-top: 1rem;
    margin: 0;
    @media screen and (max-width: 991px) {
        margin-top:.5rem;
        font-size: .75rem;
    }
`

const Description = styled.p`
    padding-left: 1rem;
    padding-right:1rem;
    @media screen and (max-width: 991px) {
        font-size: .75rem;
    }
`

const Url = styled.a`
    padding-left: 1rem;
    padding-right:1rem;
    padding-bottom: 1rem;
    text-decoration: none;
    font-weight: 600;
    color: #e16162;
    @media screen and (max-width: 991px) {
        font-size: .75rem;
        padding-bottom: .5rem;
    }
`

const Image = styled.img`
    align-self: center;
    margin: 1rem;
    max-height: 90%;
    border-radius: 5px;
    border: solid 2px;
    border-color: black;
    @media screen and (max-width: 991px) {
        margin: 0;
        max-height: 45%;
    }
    @media screen and (max-width: 479px) {
        margin: 0;
        max-height: 32%;
    }
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