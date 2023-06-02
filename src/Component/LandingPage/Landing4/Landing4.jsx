import React from 'react'
import { Container, Wrapper,Body ,Icon3,CardHolder,Card1,Card2,Card3,Icon1,Icon2,IconDiv} from './Landing4Style'

const Landing4 = () => {
  return (
    <Container>
        <Wrapper>
            <Body>
                <h1 style={{color: "#012c6d"}}>Why We Are Different</h1>
                <p style={{fontSize: "24px", textAlign: "center", margin: "0px", color: "lightgrey",  padding: "10px"}}>Our vision is to provide access to the world’s markets easier, faster and<br/> at a lower cost than what exists in the market today.</p>
            </Body>
            <CardHolder>
               <Card1>
                 <IconDiv>
                 <Icon1/>
                 </IconDiv>
                 <h1 style={{fontSize: "20px"}}>INSTITUTIONAL INVESTMENT</h1>
                 <p style={{textAlign: "center"}}>When you select kryptbase-assets.com to manage institutional assets, you will generate a better ROI</p>
               </Card1>
               <Card2>
                 <IconDiv>
                 <Icon2/>
                 </IconDiv>
                 <h1 style={{fontSize: "20px"}}>REAL ASSETS</h1>
                 <p  style={{textAlign: "center"}}>Investors looking to add a broad real assets allocation to their private markets</p>
               </Card2>
               <Card3>
                 <IconDiv>
                 <Icon3/>
                 </IconDiv>
                 <h1 style={{fontSize: "20px"}}>ALTERNATIVES</h1>
                 <p  style={{textAlign: "center"}}>As a pioneer in alternative investing kryptbase-assets.com has a long track record of managing investors money

</p>
               </Card3>
            </CardHolder>
        </Wrapper>
    </Container>
  )
}

export default Landing4