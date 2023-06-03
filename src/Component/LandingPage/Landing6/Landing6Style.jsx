import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    width: 90%;
    height: auto;
    background-color: #F6F7F8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 426px){
        width: 100%;
    }
`
export const Body = styled.div`
    width: 80%;
    display: flex;
    gap: 10px;

    @media screen and (max-width:426px){
        display: flex;
       flex-wrap: wrap;
    }
`
export const Right = styled.div`
    width: 70px;
    height: 50px;
    background-color: #4184DD;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: white;
    margin-top: 30px;
`
export const Left = styled.div`
  width: 150px;
`
export const BodyWrap = styled.div`
    display: flex;
    gap: 40px;
    padding: 10px;
`
export const Bottom = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;


    @media screen and (max-width:426px){
        display: flex;
        flex-wrap: wrap;
        height: 100%;
    }
`
export const Image1 = styled.div`
    width: 300px;
    height: 150px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid grey;

    @media screen and (max-width:426px){
        display: none;

    }
`
export const Image2 = styled.div`
    width: 300px;
    height: 150px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid grey;

    @media screen and (max-width:426px){
        /* display: none; */
        width: 100px;
        height: 50px;
        border: none;
    }
  
`
export const Image3 = styled.div`
    width: 300px;
    height: 150px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid grey;

    @media screen and (max-width:426px){
        /* display: none; */
        width: 300px;
    height: 150px;
        border: none;
    }
`
export const Image4 = styled.div`
    width: 300px;
    height: 150px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:426px){
        display: none;
    }
`
export const Img = styled.img`
    width: 100px;
`

