import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container= styled.div`
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

`
export const Wrapper= styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
export const Right= styled.div`
    width: 40%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Left= styled.div`
    width: 60%;

`
export const Img= styled.img`
    height: 100%;
    width: 100%;

`
export const H1= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin: 0px;
        padding: 0px;
    }
`
export const Card= styled.div`
    width: 100%;
    height: 100%;
`

export const Span= styled.div`
    color: lightgrey;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 10px;
margin-bottom: 10px;
`
export const Input= styled.input`
   width :200px ;
   height: 20px;
   border-radius: 8px;
   border: none;
   background-color: transparent;
   padding: 10px;
   outline: none;
`
export const Span2 =styled(Link)`
    margin-left: 5px;
    color: #4184DD;
    cursor: pointer;
    text-decoration: none;

`
export const Label= styled.div`
     color: rgb(255, 255, 255);
    font-size: 14px;
    font-family: sans-serif, monospace;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 1%;
    display: flex;
    align-items: center;
 margin-right: 150px;
`
export const Button= styled.div`
     border: 0px;
    display: inline-block;
    background: #242424;
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 280px;
    cursor: pointer;
`
export const PassWordText= styled.div`
width: 60%;
display: flex;
justify-content: flex-end;
   span{
    text-align: right;
   } 
`
export const Form= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const SpinnerCircular= styled.div`
    
`
export const RightWrap = styled.div`
    width: 100%;
    height: 60%;
`
export const InputHold =styled.div`
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