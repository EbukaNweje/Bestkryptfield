import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
export const Container = styled.div`
   width :100% ;
   display: flex;
    align-items: center;
    flex-direction: column;

`
export const Wrapper = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const DownHeader = styled.div`
     width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 426px){
        display: flex;
        justify-content: space-between;
        width: 100%;
        /* background-color: red; */
    }

   
`
export const TopHeader = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;
    @media screen and (max-width: 426px){
        display: none;
    }
`
export const Button = styled(Link)`
    width: 100px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: lightgrey;
    cursor: pointer;

    @media screen and (max-width: 426px){
        display: none;
    }
`
export const Button1 = styled(Link)`
    width: 150px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: lightgray;
    color: #ffffff;
    cursor: pointer;

    @media screen and (max-width: 426px){
        display: none;
    }
`
export const Line = styled.div`
   width :100% ;
   height: 3px;
   background-color: lightgray;
   margin-top: 5px;

   @media screen and (max-width: 426px){
        display: none;
    }
`
export const H1 = styled(Link)`
    cursor: pointer;
  text-decoration: none;
  color: inheritw;
    :hover{
        color: rgb(27, 147, 238); 
    }
`
export const Image = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    /* background-color: blue; */
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 426px){
        width: 50%;
        
    }
`
export const NavHold = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 906px){
        display: none;
    }
`
export const CompanyHold=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const D =styled.p`

`
export const RosourcesHold= styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
`
export const PlanningHold= styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
`
export const Ic = styled(MdKeyboardArrowDown)`
    cursor: pointer;
`;
export const Img= styled.img`
    width: 200px;
    @media screen and (max-width: 426px){
        width: 200px;
    }
`
export const BurgerWrap = styled.div`
    display: none;

    @media screen and (max-width: 426px){
        
        display: flex;
        width: 50%;
        /* background-color: green; */
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        margin-right: 10px;
    }
`