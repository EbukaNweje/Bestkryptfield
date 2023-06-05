import React,{useEffect} from 'react';
import {
    Container, H1, Line3, Col1,
    Col2, Col3, Image, Imag,Footer2,Cryp
    //  Line4, P, Input, Button, H2
} from './FooterStyle';
import Logo from "./NewLogo.jpeg"
import ScrollToTop from "react-scroll-to-top";
// import Footer2 from "../Footer/Footer"

const Footer = () => {

    // useEffect(()=>{
    //     window.scroll({
    //         top: 0,
    //         left: 100,
    //         behavior: "smooth"
    //     })
    // }, [])

    return (
        <Container>
            {/* <H1>okx exchange</H1> */}
            <Line3>
                <Col1>
                    <span style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#0459B9" }}>Market</span>
                    <a href="/stock" style={{ color: "black" }}>Stocks</a>
                    <a href="/forex" style={{ color: "black" }}>Forex</a>
                    <a href='' style={{ color: "black" }}>Real Estate</a>
                    <a href='' style={{ color: "black" }}>Crypto Currency</a>
                    <a href='' style={{ color: "black" }}>Fixed Income</a>
                    <a href='' style={{ color: "black" }}>Agriculture</a>
                    <a  href=''style={{ color: "black" }}>Renewable energy</a>
                    <a href="/farm" style={{ color: "black" }}>Non-farm payroll</a>
                    <a href="/multiassets" style={{ color: "black" }}>Multi Assets</a>
                </Col1>
                <Col1>
                    <span style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#0459B9" }}>Useful Links</span>
                    <a href="/" style={{ color: "black" }}>Help Center</a>
                    <a href="/aboutus" style={{ color: "black" }}>Legal Docs</a>
                    <a href="/arbitage" style={{ color: "black" }}>Reports</a>
                </Col1>
                <Col2>
                    <span style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#0459B9" }}>Planning Services</span>
                    <a href="/support" style={{ color: "black" }}>Finacial Planning</a>
                    <a href="/sendrequest" style={{ color: "black" }}> Private Wealth Management</a>
                    <a href='' style={{ color: "black" }}> Private Wealth Management</a>
                    <a href='' style={{ color: "black" }}>Long Term Care</a>
                    <a href='' style={{ color: "black" }}> Business Planning</a>
                    <a href='' style={{ color: "black" }}> Oil & Gas</a>
                </Col2>
                <Col3>
                    <Image>
                        <Imag src={Logo} />
                    </Image>
                    <span style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "10px", color: "#0459B9" }}>Contact Information</span>
                    {/* <a href="/support" style={{ color: "black" }}>FAQ's</a> */}
                    <p style={{ color: "black" }}>bestkrypfield@gmail.com</p>
                    <a href="/support" style={{ color: "black" }}>bestkrypfield.com</a>
                    {/* <a href="/faqdet" style={{ color: "black" }}>Reports</a> */}
                </Col3>
            </Line3>
            <Cryp>

            </Cryp>
           <Footer2>
            <p style={{fontSize: "15px", color: "lightgray", lineHeight:"1.8"}}>
            Kryptbase Assets , is a Registered Investment Advisor (CRD#305726). This website is for general informational purposes only. Nothing herein is an offer to buy or sell, or the solicitation of any offer to buy, any security or interest in any investment, nor is it intended to be used for marketing purposes to any existing or prospective investor in any jurisdiction, and is subject to correction, completion and amendment without notice. A solicitation of any offer to buy at such time as an offering may commence will only be made to a qualified offeree pursuant to a confidential offering memorandum describing the offering and related subscription agreement, and in accordance with applicable state or federal law or that of any other applicable jurisdiction. Please visit: www.adviserinfo.sec.gov for additional information regarding Kryptbase Assets .

*Past performance is no guarantee of future results. Investments in securities, digital assets and derivatives are risky and investors may lose money.

**Provided for illustrative purposes only. Nothing in this presentation is intended as an offer to sell a security product, or construed as an investment offer. Doesn't reference an existing fund.

***The nature of relationships between Kryptbase Assets and Fidelity Digital Assets: Kryptbase Assets is a client of Fidelity’s Custodial Services.

Past performance of any Fund or strategy is not predictive of future performance. Investors should be aware that a total loss of principal may occur. The material provided herein is for informational purposes only. It does not constitute an offer to sell or a solicitation of an offer to buy any interests in the Fund or any other securities. Any offering of a Fund will be made only in accordance with the terms and conditions set forth in the Fund's Private Placement Memorandum or similar document (Offering Materials). Prior to investing, investors are strongly urged to review carefully the Offering Materials including the risks, the Limited Partnership Agreement and the Subscription Documents. Investors are advised to discuss any prospective investment in the Fund with their legal and tax advisers in order to make an independent determination of the suitability and consequences of an investment. Investments discussed on this site are suitable only for sophisticated investors who fully understand, and are willing to assume, the risks involved in the investments, Funds and strategies presented. Kryptbase Assets , does not offer a complete investment program. The investments and strategies presented on this site involve a substantial degree of risk, including the risk of total loss of an investor's capital. No person has been authorized to give any information or to make any representation, warranty, statement or assurance not contained in the Offering Materials and, if given or made, such other information or representation, warranty, statement or assurance may not be relied upon. Prospective investors should inform themselves and take appropriate advice as to any applicable legal requirements and any applicable taxation and exchange control regulations in the countries of their citizenship, residence or domicile which might be relevant to the purchase, holding or redemption of interests. Kryptbase Assets is registered with the US Securities & Exchange Commission as an investment adviser, CRD 305726. Please see this site for more information, our disclosure brochure and our relationship summary https://adviserinfo.sec.gov/firm/summary/305726
            </p>
           </Footer2>

            {/* <ScrollToTop style={{
                    width: 80, height: 40, border: "1px solid grey", backgroundColor: "#0459B9", opacity: "80%", color: "#fff"
                }} smooth/>  */}
        </Container>
    )
};

export default Footer;

