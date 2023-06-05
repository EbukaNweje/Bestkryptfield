import React from 'react'
import { Container, Img, Left, Right, Wrapper, H1, Card, Span, Span2, Input, Label, Button, PassWordText, Form, SpinnerCircular,RightWrap } from './LoginStyle'
import LoginImg from "./Login.jpg"
import { MdEmail } from 'react-icons/md'
import { BsFillLockFill } from 'react-icons/bs'
// import { SpinnerCircular } from 'spinners-react';
const Login = () => {

    const [loading, setLoading] = React.useState(false)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Img src={LoginImg} />
                </Left>
                <Right>
                    <RightWrap>
                        <H1>

                            <h1>Login into Your Account</h1>
                            <p>Don't have an account here? login here </p>
                        </H1>
                        <Card>
                            <H1 style={{ textAlign: "center" }}>Log in to your account</H1>
                            <Span>Don't have an account? <Span2 to='/register'>Sign up</Span2></Span>
                            <Form onSubmit={(e) => Login(e)}>
                                <Label><MdEmail style={{ marginRight: "2%" }} />Username*</Label>
                                <Input type="text" placeholder=' Enter username' />

                                <Label><BsFillLockFill style={{ marginRight: "2%" }} />Password*</Label>
                                <Input type="password" placeholder='Enter password' />
                                <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Log in"}</Button>
                                <PassWordText to="/forgotpassword"><span style={{ color: "#FF4D4D", cursor: "pointer", textDecoration: "underline" }}>Forgot your password?</span></PassWordText>
                            </Form>
                        </Card>
                    </RightWrap>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Login