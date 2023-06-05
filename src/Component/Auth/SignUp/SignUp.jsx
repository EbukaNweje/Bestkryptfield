import React from 'react'
import { Container, Wrapper, Right, Left, Img, RightWra, H1, Span, Span2, Card, Form, InputHold, Input, PassWordText, Button,CheckBox,CheckContainer,Tetx } from './SignUpStyle'
import SignUpImg from "./Login.jpg"
import { FaUserAlt, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
const SignUp = () => {
  const [loading, setLoading] = React.useState(false)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src={SignUpImg} />
        </Left>
        <Right>
          <RightWra>
            <H1>
              <h1>Open an Account</h1>
              <Span>Already have an Account? <Span2 to='/login'>Login here</Span2></Span>
            </H1>
            <Card>
              <Form onSubmit={(e) => Login(e)}>
                <InputHold>
                  <Input type="text" placeholder=' First Name' />
                  <FaUserAlt />
                </InputHold>
                <InputHold>
                  <Input type="password" placeholder='Last Name' />
                  <FaUserAlt />
                </InputHold>
                <InputHold>
                  <Input type="password" placeholder='User Name' />
                  <FaUserAlt />
                </InputHold>
                <InputHold>
                  <Input type="password" placeholder='Email Address' />
                  <FaEnvelope />
                </InputHold>
                <InputHold>
                  <Input type="password" placeholder='Country' />
                  {/* <FaLock /> */}
                </InputHold>
                <InputHold>
                  <Input type="text" placeholder=' Phone Number' />
                  <FaPhone />
                </InputHold>
                <InputHold>
                  <Input type="text" placeholder=' Password' />
                  <FaLock />
                </InputHold>
                <InputHold>
                  <Input type="text" placeholder='Confirm  Password' />
                  <FaLock />
                </InputHold>
                <PassWordText to="/forgotpassword"><span style={{ color: "lightgray", cursor: "pointer", textDecoration: "underline" }}>Forgot your password?</span></PassWordText>
                <CheckContainer>
                  <CheckBox type="checkbox" required />
                  <Tetx>I agree to the terms and conditions</Tetx>
                </CheckContainer>
                <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Log in"}</Button>
              </Form>
            </Card>
          </RightWra>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default SignUp