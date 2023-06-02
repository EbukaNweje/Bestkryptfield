import React from 'react'
import { Container, Wrapper, Body, CardHolder, Card,Name } from './Landing7Styled'

const Landing7 = () => {
    return (
        <Container>
            <Wrapper>
                <Body>
                    <h1 style={{ color: "#012c6d" }}>What people are saying</h1>
                    <p style={{ fontSize: "24px", textAlign: "center", color: "gray" }}>At Bestkryptfield Assets we have built our reputation over the years and here is what our clients has to say<br /> about us</p>
                </Body>
                <CardHolder>
                    <Card>
                        <p style={{ color: "gray", fontSize: "20px" }}>I highly recommend this investment company to anyone looking to diversify their portfolio.</p>
                        <Name>
                            <p style={{margin: "0px"}}>Sarah Johnson</p>
                            <p>CFO AT ABC CORP</p>
                        </Name>
                    </Card>
                    <Card>
                        <p style={{ color: "gray", fontSize: "20px" }}>I invested in Crypto and Stocks with this company and my portfolio has grown exponentially</p>
                       <Name>
                       <p style={{margin: "0px"}}>John Daniel</p>
                        <p>C.E.O AT XYZ INC</p>
                       </Name>
                    </Card>
                    <Card>
                        <p style={{ color: "gray", fontSize: "20px" }}>The level of support and guidance I've received has been unparalleled. I'm now a proud shareholder of multiple successful companies.</p>
                        <Name>
                        <p style={{margin: "0px"}}>Stellar Gizmo</p>
                        <p>MANAGING DIRECTOR AT SAPPHIRE ENTERPRISE</p>
                        </Name>
                    </Card>
                </CardHolder>
            </Wrapper>
        </Container>
    )
}

export default Landing7