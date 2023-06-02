import styled from "styled-components";

export const Container =styled.div`
    width: 100%;
    height: auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper =styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;


    @media screen and (max-width: 426px){
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        flex-direction: row;
    }

`
export const Image =styled.img`
    width: 35%;
    height: 600px;


    @media screen and (max-width: 426px){
       display: none;
    }
`
export const H1 =styled.div`
     width: 55%;
     /* background-color: red; */
     padding: 10px;
     font-size: 14px;
     color: #012C6D;

     @media screen and (max-width: 426px){
       width: 100%;
    }
`
export const Imag =styled.img`

@media screen and (max-width: 426px){
       width: 100px;
    }
   
`
export const Images =styled.div`
display: flex;
justify-content: space-between;
     width: 100%;
     margin-top: 50px;

     @media screen and (max-width: 426px){
       width: 100%;
    }
`
export const gdfg =styled.div`
    
`
export const gdf =styled.div`
    
`
export const ffg =styled.div`
    
`
export const fg =styled.div`
    
`