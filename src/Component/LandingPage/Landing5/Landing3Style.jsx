import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;

    @media screen and (max-width: 426px){
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        height: 100%;
    }

   
`
export const Wrapper = styled.div`
    width: 80%;
    height: 280px;
    display: flex;
    background-color: #F6F7F8;
    border-radius: 10px;
    /* padding: 10px; */
`
export const Right = styled.div`
   width :50% ;
   padding: 10px;
   margin-left: 20px;

   @media screen and (max-width: 426px){
        width: 100%;
    }
`
export const Left = styled.div`
    width: 50%;

    @media screen and (max-width: 426px){
        display: none;
    }
`
export const Button = styled.div`
    width: 200px;
    height: 40px;
    background-color: #4184DD;
    display: flex;
 align-items: center;
 justify-content: center;
 text-align: left;
 /* margin-left: 85px; */
 margin-top: 30px;
 border-radius: 8px;
 color: white;
 
 @media screen and (max-width: 426px){
    margin-top: 0px;
 }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`
export const Wrapper2 = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 50px;

    @media screen and (max-width: 426px){
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 40px;
    }
`
export const Card1= styled.div`
    width: 350px;
    display: flex;
    padding: 10px;
    border-right: 1px solid grey;

    @media screen and (max-width: 426px){
        width: 100%;
        border: none;
        margin-top: 40px;

    }
`
export const Card2 = styled.div`
    width: 350px;
   
    padding: 10px;
    border-right: 1px solid grey;

    @media screen and (max-width: 426px){
        width: 100%;
        border: none;

    }
`
export const Card3 = styled.div`
    width: 350px;
    padding: 10px;

    @media screen and (max-width: 426px){
        width: 100%;
        border: none;

    }
`
export const Img = styled.img`
    width: 100px;

    @media screen and (max-width: 426px){
        display: none;
    }
`
export const Rit = styled.div`
    width: 300px;
    height: 150px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* background-color: green; */
    padding: 10px;
`