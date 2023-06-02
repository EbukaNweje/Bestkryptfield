import React from 'react'
import { Container, Wrapper, Body, Left, Right, BodyWrap, Bottom, Image1, Image2, Image3, Image4,Img } from './Landing6Style'
import styled from 'styled-components'
import Crypto from "./cryptocom.png"
import Coin from "./coinbase.png"
const Landing6 = () => {
    return (
        <Container>
            <Wrapper>
                <h1>How to invest</h1>
                <Body>
                    <BodyWrap>
                        <Right>
                            1
                        </Right>
                        <Left>
                            <h1>Register</h1>
                            <p>Signup on our platform to join investors earn profits</p>
                        </Left>
                    </BodyWrap>
                    <BodyWrap>
                        <Right>
                            2
                        </Right>
                        <Left>
                            <h1>Fund</h1>
                            <p>Fund your account using a wide range of funding methods.</p>
                        </Left>
                    </BodyWrap>
                    <BodyWrap>
                        <Right>
                            3
                        </Right>
                        <Left>
                            <h1>Invest</h1>
                            <p>Choose a plan that suits you and invest</p>
                        </Left>
                    </BodyWrap>
                </Body>
                <Line></Line>
                <Bottom>
                    <Image1></Image1>
                    <Image2>
                        <Img src={Crypto} />
                    </Image2>
                    <Image3>
                        <Img src={Coin} />
                    </Image3>
                    <Image4></Image4>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Landing6

const Line = styled.div`
   width :100% ;
   height: 1px;
   background-color: lightgray;
   margin-top: 40px;
`