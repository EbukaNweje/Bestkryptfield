import React from 'react'
import { Container, Wrapper,Image,H1,Images,Imag } from './Landing3Style'
import Home from "./about-home.png"
import styled from 'styled-components'
import Award1 from "./monee-content-award1.png"
import Award2 from "./monee-content-award2.png"
import Award3 from "./monee-content-award3.png"
const Landing3 = () => {
  return (
    <Container>
        <Wrapper>
           <Image src={Home} /> 
           <H1>
            <h1 style={{lineHeight: 1.4}}>OUR ADVISORS CONNECT YOUR FINANCES<br/> TO WHAT YOU WANT OUT OF LIFE AND<br/> CREATE A PLAN DESIGNED TO MAKE IT <br/>HAPPEN, REVEALING POSSIBILITIES WHILE<br/> PROTECTING YOU FROM THE UNEXPECTED<br/>—TODAY AND EVERY DAY AFTER.</h1>
            <Line></Line>
            <p style={{fontSize: "18px", color: "black"}}>A personalized plan that brings all aspects of your financial life together A <br/>strategic mix of insurance and investments working together for your goals <br/>Your go-to financial expert who helps keep your big picture, and dreams, in <br/>focus</p>
            <h1 style={{fontSize: "23px"}}>Multi-award winner</h1>
            <p style={{fontSize: "18px", color: "black"}}>We’ve been consistently recognised by our industry and have won the highest<br/> accolades for our products, platform and service.</p>
            <Images>
                <Imag src={Award1}/>
                <Imag src={Award2}/>
                <Imag src={Award3}/>
            </Images>
           </H1>
        </Wrapper>
    </Container>
  )
}

export default Landing3

const Line = styled.div`
   width :100% ;
   height: 1px;
   background-color: lightgray;
   margin-top: 40px;
`