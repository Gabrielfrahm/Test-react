import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import { Container, Content, Form, Presentation, Footer } from './styles';

const SignIn: React.FC = () => {
    return (
        <>
            <Container>
                <Presentation>
                    <h1>The Geatest App</h1>
                    <span>for</span>
                    <h1>Lottery</h1>
                </Presentation>
                <Content>
                    <Form action="">
                        <h1>Authentication</h1>
                        <div>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <a href="/">I forget my password </a>
                            <button>Log In  <FiArrowRight /></button>
                        </div>
                    </Form>
                    <button>Sign Up  <FiArrowRight /></button>
                </Content>
            </Container>
            <Footer><p>Copyright 2020 Luby Software</p></Footer>
        </>
    )
}

export default SignIn;