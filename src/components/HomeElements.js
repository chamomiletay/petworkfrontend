import styled from 'styled-components'




export const HomeContainer = styled.div`
    display:flex;
    jusify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position:relative;
    z-index: 1;
`


export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    heigh: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 80%%;
    -o-object-fit:cover;
    object-fit:cover;
    background: white;
`

export const HomeContent = styled.div`
    z-index: 2;
    max-width: 1200px;
    color: white;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items:center;
`


export const HomeH1 =styled.h1`
    justify-content: center;

`

