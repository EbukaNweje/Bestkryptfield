import React from 'react'
import { Container, Wrapper,Image ,Header,H1,Imag,Text, Body,Card,Image1,Imag1} from './Landin8Style'
import Rock from  "./monee-content-image12.png"
import one from "./one.jpeg"
import two from "./two.jpeg"
import three from "./three.jpeg"
const Landing8 = () => {
  return (
    <Container>
        <Wrapper>
          <Header>
            <H1>News and Analysis</H1>
            <Image>
                <Imag src={Rock}/>
            </Image>
          </Header>
          <Body>
            <Card>
                <Image1>
                    <Imag1 src={two} />
                </Image1>
                <h1 style={{fontSize: "25px", color:" #012c6d"}}>Investing In Renewable Power</h1>
                <p style={{fontSize: "15px", color: "gray"}}>1ST FEB 2023    |    WRITTEN BY ADMIN</p>
                <p style={{fontSize: "15px", color: "gray"}}>RENEWABLE ENERGY IS A GROWING INDUSTRY THAT HAS THE POTENTIAL TO PROVIDE SUSTAINABLE AND ENVIRONMENTALLY FRIENDLY ENERGY SOURCES. INVESTING IN RENEWABLE ENERGY CAN HELP YOU TO SUPPORT THIS IMPORTANT SECTOR, WHILE ALSO...</p>
                <p style={{fontSize: "15px", color: "gray"}}>CONTINUE READING </p>
            </Card>
            <Card>
                <Image1>
                    <Imag1 src={one} />
                </Image1>
                  <Text>
                  <h1 style={{fontSize: "25px",color:" #012c6d"}}>How To Invest In Stocks</h1>
                <p style={{fontSize: "15px", color: "gray"}}>1ST FEB 2023    |    WRITTEN BY ADMIN</p>
                <p style={{fontSize: "15px", color: "gray"}}>A BEGINNER'S GUIDE INVESTING IN STOCKS CAN BE A GREAT WAY TO GROW YOUR WEALTH OVER THE LONG TERM, BUT IT CAN ALSO BE INTIMIDATING FOR THOSE WHO ARE NEW TO THE...</p>
                <p style={{fontSize: "15px", color: "gray"}}>CONTINUE READING </p>
                  </Text>
            </Card>
            <Card>
                <Image1>
                    <Imag1 src={three} />
                </Image1>
                <h1 style={{fontSize: "25px",color:" #012c6d"}}>How to invest in Cryptocurrency</h1>
                <p style={{fontSize: "15px", color: "gray"}}>1ST FEB 2023    |    WRITTEN BY ADMIN</p>
                <p style={{fontSize: "15px", color: "gray"}}>CRYPTOCURRENCY HAS BEEN MAKING HEADLINES IN RECENT YEARS AS AN INVESTMENT OPTION WITH POTENTIALLY HIGH RETURNS. HOWEVER, WITH ANY INVESTMENT COMES RISK, AND IT'S IMPORTANT TO UNDERSTAND THE BASICS BEFORE DIVING IN....</p>
                <p style={{fontSize: "15px", color: "gray"}}>CONTINUE READING </p>
            </Card>
          </Body>
        </Wrapper>
    </Container>
  )
}

export default Landing8