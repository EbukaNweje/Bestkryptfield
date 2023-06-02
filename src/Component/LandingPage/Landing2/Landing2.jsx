import React from 'react'
import { Container,Wrapper,H1,P,Button ,Wrapper2,Card,M,FaMoneyBillWa,FaChartB,FaCoin,FaFileInvoiceDolla, FaOilCa} from './Landing2Style'
// import { FaMoneyBillWave, FaChartBar,FaCoins,FaFileInvoiceDollar } from "react-icons/fa";
const Landing2 = () => {
  return (
   <Container>
      <Wrapper>
         <H1>Investment plans that suits your personality</H1>
         <P>We create value by sticking to our consistent investment philosophy and disciplined research process</P>
      </Wrapper>
      <Wrapper2>
          <Card>
            <FaMoneyBillWa />
            <M>Forex</M>
          </Card>
          <Card>
            <FaChartB/>
            <M>Stocks</M>
          </Card>
          <Card>
            <FaCoin/>
            <M>Crypto</M>
          </Card>
          <Card>
            <FaFileInvoiceDolla/>
            <M>Non-farm Payroll</M>
          </Card>
          <Card>
            <FaOilCa/>
            <M>Renewable Energy </M>
          </Card>
      </Wrapper2>
      <Button>More Products</Button>
   </Container>
  )
}

export default Landing2