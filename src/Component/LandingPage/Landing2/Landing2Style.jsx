import styled from "styled-components";
import { FaMoneyBillWave, FaChartBar,FaCoins,FaFileInvoiceDollar,FaOilCan } from "react-icons/fa";
export const Container = styled.div`
  width: 1005;
  height: auto;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
export const H1 = styled.div`
  font-size: 30px;
  color: #012C6D;
  margin-top: 30px;
`
export const P = styled.div`
  font-size: 18px;
  margin-top: 10px;
`
export const Wrapper2 = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   margin-top: 30px;


  @media screen and (max-width: 426px){
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

`
export const Card = styled.div`
 width: 200px;
 height: 150px;
 background-color: white;
 border: 1px solid rgb(27, 147, 238);
 border-radius: 10px;
 display: flex;
 flex-direction: column;
   align-items: center;
   justify-content: center;


  @media screen and (max-width: 426px){
    width: 300px;
 height: 200px;
  }

`
export const M = styled.div`
 font-size: 18px;
 background-color: #4184DD;
 color: white ;
 margin-top: 20px;
 width: 100px;
 display: flex;
 align-items: center;
 justify-content: center;
border-radius: 5px;
text-align: center;
`
export const FaMoneyBillWa = styled(FaMoneyBillWave)`
  color: grey;
  font-size: 40px;
`;
export const FaChartB = styled(FaChartBar)`
  color: grey;
  font-size: 40px;
`;
export const FaCoin = styled(FaCoins)`
  color: grey;
  font-size: 40px;
`;
export const FaFileInvoiceDolla = styled(FaFileInvoiceDollar)`
  color: grey;
  font-size: 40px;
`;
export const FaOilCa = styled(FaOilCan)`
  color: grey;
  font-size: 40px;
`;
export const Button= styled.div`
    width: 200px;
    height: 40px;
    background-color: #4184DD;
    display: flex;
 align-items: center;
 justify-content: center;
 text-align: left;
 margin-left: 85px;
 margin-top: 30px;
 border-radius: 8px;
 color: white;
`