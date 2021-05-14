import React, { useState } from 'react'
import * as Login from './LoginPage.elements'
import axiosInstance from '../../helpers/axios'
import { useHistory } from "react-router-dom";

const LoginPage = () => {

    var history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        axiosInstance.post('api/user/login', {
            email : email,
            password : password,
        }).then((response) => {
            if (!response.data.auth){
                alert(response.data.message);
            }else{
                localStorage.setItem("token", response.data.token)
                history.push('/')
            }
        })
    }

    return (
        <>
        <Login.LoginPageWrap>
            <Login.LoginPageContainer>
                <Login.Logo>
                    <Login.MainLogo />
                </Login.Logo>
                <Login.Header>E-Wallet App</Login.Header>
                <Login.CardContainer>

                    <Login.FormWrapper onSubmit={submitHandler}>
                        <Login.FormField>
                            <Login.Label>Email</Login.Label>
                            <Login.Text type="email" required placeholder="email" onChange={(e) => {setEmail(e.target.value) }}/>
                        </Login.FormField>

                        <Login.FormField>
                            <Login.Label>Password</Login.Label>
                            <Login.Text type="password" required placeholder="password" onChange={(e) => {setPassword(e.target.value) }}/>
                        </Login.FormField>

                        <Login.FormField>
                            <Login.LoginButton>Login</Login.LoginButton>
                        </Login.FormField>

                        <Login.TextLabel>
                            <Login.TextSignup to='/signup'>No account? Sign up here</Login.TextSignup>
                        </Login.TextLabel>
                    </Login.FormWrapper>

                </Login.CardContainer>
            </Login.LoginPageContainer>
        </Login.LoginPageWrap>   
        </>
    )
}

export default LoginPage
