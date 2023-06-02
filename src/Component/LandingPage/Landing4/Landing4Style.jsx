import styled from "styled-components";
import { FaPercent,FaFileInvoice,FaHands} from "react-icons/fa";
export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

`
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`
export const Body = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const CardHolder = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    /* gap: 20px; */

`
export const Card1 = styled.div`
    width: 450px;
    height: 250px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 2px solid lightgrey;
    border-bottom: 2px solid lightgrey;
    padding: 10px;
`
export const Card2= styled.div`
    width: 450px;
    height: 250px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 2px solid lightgrey;
    border-bottom: 2px solid lightgrey;
    padding: 10px;
`
export const Card3 = styled.div`
    width: 450px;
    height: 250px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid lightgrey;
    padding: 10px;
`

export const Icon1 = styled(FaPercent)`
    font-size: 30px;
    color: white;
`
export const Icon2 = styled(FaFileInvoice)`
    font-size: 30px;
    color: white;
`
export const Icon3 = styled(FaHands)`
    font-size: 30px;
    color: white;
`
export const IconDiv = styled.div`
     width: 60px;
    height: 60px;
    background-color: #4184DD;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`
