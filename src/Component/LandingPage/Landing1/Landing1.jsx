import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, SliderHolder, } from './Landing1Style';
import Forex from "./forex.jpeg"
import Forex2 from "./forex1.jpg"
const Landing1 = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (

    <Container>
      <StyledSlider {...settings}>
        <SlideItem>
          <H2>
            <h1 style={{ fontSize: "35px", fontWeight: "bold",fontFamily:
"sans-seri" }}>
              VALUE INVESTING REDEFINED</h1>
            <p style={{ fontSize: "25px", textAlign: "left" }}>At kryptbase-assets.com, we create value by sticking to our consistent investment philosophy and disciplined research process</p>
          </H2>
        </SlideItem>
        <SlideItem2>
          <H1>
            <h1 style={{ fontSize: "35px", fontWeight: "bold", textAlign: "left" }}>Trade your way</h1>
            <p style={{ fontSize: "25px", textAlign: "left" }}>Become the trader you want to be with our next generation platform technology and personal client service.</p>
          </H1>
        </SlideItem2>
      </StyledSlider>

      <iframe title='frame' allowtransparency="true" frameborder="0" src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22OANDA%3ASPX500USD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22OANDA%3ANAS100USD%22%2C%22title%22%3A%22Nasdaq%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22BTC%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22ETH%2FUSD%22%7D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22www.pipscountdigitalvip.net%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.pipscountdigitalvip.net%2F%22%7D" style={{ boxSizing: "border-box", display: "block", height: "50px", width: "90%", borderRadius: "10px", marginTop: "3px" }}></iframe>

      <Line></Line>
    </Container >

  )
}

export default Landing1


const StyledSlider = styled(Slider)`
   width: 80%;
   height: 400px;
   display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */


    @media screen and (max-width: 426px){
    width: 90%;
   
  }
 
`;

const SlideItem = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 30px;
  background-image: url(${Forex});
  background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;



`;
const SlideItem2 = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 30px;
  background-image: url(${Forex2});
  background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;

 
`;
const Line = styled.div`
   width :80% ;
   height: 1px;
   background-color: lightgray;
   margin-top: 40px;
`
const H1 = styled.div`
width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  padding: 10px;

  p{
    @media screen and (max-width: 426px){
      display: none;
    }
  }
  h1{

    font-family: sans-serif;
    margin-right: 10px;
    @media screen and (max-width: 426px){
      display: flex;
      text-align: center;
      height: 100%;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    font-family: sans-serif;
    }
  }
`
const H2 = styled.div`
width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  p{


    @media screen and (max-width: 426px){
      display: none;
    }
  }
  h1{
    margin-right: 10px;
    font-family: sans-serif;
    @media screen and (max-width: 426px){
      width: 100%;
      display: flex;
      text-align: center;
      height: 100%;
      align-items: center;
      /* justify-content: center; */

    font-family: sans-serif;
    }
  }
`