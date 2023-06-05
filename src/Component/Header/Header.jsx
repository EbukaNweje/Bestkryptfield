import React, { useState } from 'react'
import { Container, Wrapper, TopHeader,Img, DownHeader, Button,BurgerWrap, Button1, Line, Image, H1, NavHold, CompanyHold,D, PlanningHold,RosourcesHold,Ic } from './HeaderStyle'
import "../../App.css"
import Logo from "./NewLogo.jpeg"
import { useNavigate } from 'react-router'
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
const Header = () => {
    const navigate= useNavigate()
    const [company, setCompany] = useState(false)
    const [planning, setPlanning] = useState(false)
    const [resources, setRosources] = useState(false)
    const [burger, setBurger] =useState(false)

    const CompanyDrop = (
        <>
            {company && (
                <div className='companydrop' onMouseLeave={() => { setCompany(!company) }}>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Career</p>
                </div>
            )}
        </>
    )
    const PlanningDrop = (
        <>
            {planning && (
                <div className='planningdrop' onMouseLeave={() => { setPlanning(!planning) }}>
                    <p>Financial Planning</p>
                    <p>Private wealth management</p>
                    <p>Estate Planning</p>
                    <p>Long Term Care</p>
                    <p>Business Plan</p>
                    <p>Oil & gas</p>
                </div>
            )}
        </>
    )
    const ResourcesDrop = (
        <>
            {resources && (
                <div className='resourcedrop' onMouseLeave={() => { setRosources(!resources) }}>
                    <p>Help Center</p>
                    <p>Testimonial</p>
                    <p>Report</p>
                    <p>Legal Docs</p>
                </div>
            )}
        </>
    )

    const BurgerMenu = (
        <>
            {burger && (
                <div className='Burgermenu'>
                    {/* <p>Sign Up</p> */}
                    <div className='icondiv'>
                    <FaTimes className='icon' onClick={()=>{setBurger(!burger)}}/>
                    </div>
                    <p>Home</p>
                    <p>Market</p>
                    <p>Company</p>
                    <p>Planning services</p>
                    <p>Education</p>
                    <p>Resources</p>
                    <button onClick={() => navigate("/login")} >Login</button>
                </div>
            )}
        </>
    )
    
    return (
        <Container>
            <Wrapper>
                <TopHeader>
                    <Button to="/login">login</Button>
                    <Button1 to="/signup">create account</Button1>
                </TopHeader>
                <Line></Line>
                <DownHeader>
                    <Image>
                        <Img src={Logo}/>
                    </Image>
                    <BurgerWrap>
                       {
                        burger ?  <FaTimes style={{fontSize: "40px"}} onClick={()=>{setBurger(!burger)}}/>:  <FiMenu style={{fontSize: "40px"}}  onClick={()=>{setBurger(!burger)}}/>
                       }
                       {burger && BurgerMenu}
                    </BurgerWrap>
                    <NavHold>
                        <H1>Home</H1>
                        <H1>Market</H1>
                        <CompanyHold>
                            <H1>Company</H1>
                            {company ?  <Ic /> :<Ic onMouseEnter={() => { setCompany(!company) }}/> }     
                        </CompanyHold>
                        {company && CompanyDrop}
                        <PlanningHold>
                            <H1>Planning services</H1>
                            {planning ?   <Ic /> : <Ic onMouseEnter={() => { setPlanning(!planning) }}/>}   
                        </PlanningHold>
                        {planning && PlanningDrop}
                        <H1>Education</H1>
                        <RosourcesHold>
                            <H1>Resources</H1>
                            {resources ?   <Ic /> : <Ic onMouseEnter={() => { setRosources(!resources) }}/>}
                        </RosourcesHold>
                        {resources && ResourcesDrop}
                    </NavHold>
                </DownHeader>
            </Wrapper>
        </Container>
    )
}

export default Header