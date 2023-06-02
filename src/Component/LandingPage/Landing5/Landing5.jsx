import React from 'react'
import { Container, Wrapper, Wrapper2, Left, Right, Button, Rit, Image, Card1, Card2, Card3, Img } from './Landing3Style'
import People from "./poeple.jpg"
import Bow from "./Bow.svg"
const Landing5 = () => {
    return (
        <Container>
            <Wrapper>
                <Right>
                    <h1 style={{
                        color: "#012C6D", fontSize: "30px", '@media (max-width: 426px)': {
                            fontSize: '10px',
                            color: 'red',
                        },
                    }}>LONG-TERM ASSETS</h1>
                    <p style={{
                        color: "grey", fontSize: "20px", '@media (max-width: 426px)': {
                            fontSize: '10px',
                            color: 'red',
                        },
                    }}>We operate long-term assets and businesses across the globe. This approach dictates both our investment strategy and our commitment to environmental, social and governance (ESG) practices.</p>
                    <Button>More Insights</Button>
                </Right>
                <Left>
                    <Image src={People} />
                </Left>
            </Wrapper>
            <Wrapper2>
                <Card1>
                    <Img src={Bow} />
                    <Rit>
                        <h1 style={{ fontSize: "20px" }}>INVESTOR <br />RELATIONS</h1>
                        <p style={{ fontSize: "18px" }}>we offer a diversity of investment approaches, encompassing bottom-top fundamental active management...</p>
                    </Rit>
                </Card1>
                <Card2>
                    <Rit>
                        <h1 style={{ fontSize: "20px" }}>OUR DIVERSITY</h1>
                        <p style={{ fontSize: "18px" }}>we want every person to have the opportunity to succeed based on merit, regardless of race.They help us generate better ideas, reach more balanced decisions,</p>
                    </Rit>
                </Card2>
                <Card3>
                    <Rit>
                        <h1 style={{ fontSize: "20px" }}>INCLUSION STRATEGY</h1>
                        <p style={{ fontSize: "18px" }}>To us, diverse and inclusive teams enriched with people of distinctive backgrounds make us better.Engage our communities and help our clients achieve better outcomes.</p>
                    </Rit>
                </Card3>
            </Wrapper2>
        </Container>
    )
}

export default Landing5