import React, {useState} from "react";
import styled from 'styled-components';
import Button from "./Button/Button";

const InsertForm = styled.form`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
`;

const Input = styled.input`
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 80%;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
`;

const InputDiv = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const SignupHeaderDiv = styled.div`
    margin-top: 50px;
    text-align: center;   
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    
    h1 {
        margin: 0;
        font-size: 30px;
        color: #343a40;
        font-weight: 200;
    }
`;

function SignupForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault();
        const form = {
            email,
            password,
            username
        }
        console.log(form);
    }

    return (
        <>
            <InsertForm>
                <SignupHeaderDiv>
                    <h1>TODO 계정 만들기</h1>
                </SignupHeaderDiv>
                <InputDiv>
                    <Input placeholder="Email" onChange={onEmailChange} value={email} />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="Password" onChange={onPasswordChange} value={password} />
                </InputDiv>
                <InputDiv>
                    <Input placeholder="User Name" onChange={onUsernameChange} value={username} />
                </InputDiv>
                <InputDiv>
                    <Button size="large" onClick={onClick}> 등록 </Button>
                </InputDiv>

            </InsertForm>
        </>
    )
}

export default SignupForm;
