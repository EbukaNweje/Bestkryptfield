import React from 'react'
import { Container, Img, Left, Right, Wrapper, H1, Card, Span, Span2, Input, Label, Button, PassWordText, Form, SpinnerCircular, RightWrap, InputHold } from './LoginStyle'
import LoginImg from "./Login.jpg"
import { MdEmail } from 'react-icons/md'
import { BsFillLockFill } from 'react-icons/bs'
import { FaUserAlt, FaLock } from "react-icons/fa";
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
                            <h1>Log into Your Account</h1>
                            <Span>Don't have an account? <Span2 to='/signup'>Sign up</Span2></Span>
                        </H1>
                        <Card>
                            <Form onSubmit={(e) => Login(e)}>
                                <InputHold>
                                    <Input type="text" placeholder=' Enter username' />
                                    <FaUserAlt />
                                </InputHold>
                                <InputHold>
                                    <Input type="password" placeholder='Enter password' />
                                    <FaLock />
                                </InputHold>
                                <PassWordText to="/forgotpassword"><span style={{ color: "lightgray", cursor: "pointer", textDecoration: "underline" }}>Forgot your password?</span></PassWordText>
                                <Button>{loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Log in"}</Button>
                            </Form>
                        </Card>
                    </RightWrap>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Login