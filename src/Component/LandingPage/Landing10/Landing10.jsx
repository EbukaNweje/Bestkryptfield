import React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Landing10 = () =>{
    return(
        <Container>
            <Wrapper>
                <Wrap>
                    <Text>IS BITCOIN A GOOD INVESTMENT - THE ANSWER IS, YES!</Text>
                    <Button>Checkout</Button>
                </Wrap>
                <Wrap2>
                <iframe title='btc' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3AAAPL%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box",display: "block", height: "100%", width: "100%"}}></iframe>

                <iframe title='eth' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
                <iframe title='alt' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22FX%3AEURUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.kryptbased-assets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.kryptbased-assets.com%2F%22%7D" style={{boxSizing: "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
                </Wrap2>
            </Wrapper>
        </Container>
    )
};

export default Landing10;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #0F192C; */
background-color: white;
padding: 30px 0;
`;

const Wrapper = styled.div`
width: 80%;
height: auto;
display: flex;
flex-direction: column;
/* background-color: red; */
@media screen and (max-width: 426px){
    width: 90%;
}

`;

const Wrap = styled.div`
width: 100%;
width: 100%;
height: 100px;
border: 1px solid #111D32;
border-radius: 0.6rem;
/* background-color: #012C6D; */
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;


@media Screen and (max-width: 426px){
    flex-direction: column;
    align-items: flex-start;
    padding-right: 50px;
    padding: 60px 10px;
    width: 100%;
    margin-left: -10px;

}
`;
const Wrap2 = styled.div`
width: 100%;
height: auto;
margin: 35px 0;
display: flex;
justify-content: space-around;

@media Screen and (max-width: 768px){
    flex-direction: column;
    with: 100%;
    justify-content: center;
    align-items: center;
}


`;
const Text = styled.div`
font-weight: bold;
font-size: 20px;
color: #012C6D;

`;
const Button = styled.div`
width: 130px;
height: 40px;
padding: 10px 20px;
background-color: #015ec9;
border-radius: 0.5rem;
/* margin-right: 45px; */
text-align: center;
margin-top: 15px;
margin-right: 15px;
font-weight: bold;
color: #fff;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
`;

