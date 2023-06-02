import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

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

   
`
export const TopHeader = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;
`
export const Button = styled.div`
    width: 100px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: lightgrey;
    cursor: pointer;
`
export const Button1 = styled.div`
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
`
export const Line = styled.div`
   width :100% ;
   height: 3px;
   background-color: lightgray;
   margin-top: 5px;
`
export const H1 = styled.div`
    
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

    @media screen and (max-width: 960px){
        width: 100%;
        
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
    
`;
export const Img= styled.img`
    width: 200px;
`