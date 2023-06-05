import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
     width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`
export const Wrapper = styled.div`
     width: 100%;
    height: auto;
    display: flex;
`
export const Left = styled.div`
      width: 60%;

      @media screen and (max-width: 426px){
        display: none;
      }
`
export const Right = styled.div`
       width: 40%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;

    @media screen and (max-width: 426px){
        display: flex;
        width: 100%;
      }
`
export const Img = styled.img`
    
`
export const RightWra = styled.div`
     width: 100%;
    height: 100%;
`

export const H1 = styled.div`

width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        margin: 0px;
        padding: 10px;
        color: lightgray;
        font-family: sans-serif;
        font-weight: 100;
    }
`
export const Span2 = styled(Link)`
     margin-left: 5px;
    color: #4184DD;
    cursor: pointer;
    text-decoration: none;
`
export const Span = styled.div`
 color: lightgrey;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 10px;
margin-bottom: 10px;
`
export const Card = styled.div`
     width: 100%;
    height: 100%;
`
export const Form = styled.div`
      width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const InputHold = styled.div`
      width :300px ;
   height: 40px;
   border-radius: 8px;
   border: 1px solid lightgray;
   background-color: transparent;
   padding: 10px;
   outline: none;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const Input = styled.input`
    width :200px ;
   height: 20px;
   border-radius: 8px;
   border: none;
   background-color: transparent;
   padding: 10px;
   outline: none;
`
export const PassWordText = styled.div`
    width: 60%;
display: flex;
justify-content: flex-end;
   span{
    text-align: right;
   } 
`
export const Button = styled.div`
     border: 0px;
    display: inline-block;
    background: #242424;
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 280px;
    cursor: pointer;
`
export const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 5px;
`
export const Tetx = styled.div`
    
`