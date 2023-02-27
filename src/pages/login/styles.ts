import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #8744c5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContent = styled.div`
  width: 300px;
  padding: 50px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginTitle = styled.h1`
  padding: 5px 20px;
  color: #8744c5;
  border: solid 1px #8744c5;
  border-radius: 10px;
`

export const LoginInput = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px #8744c5;
  font-size: 16px;

  :focus {
    outline: none !important;
    border: solid 2px #8744c5;
  }
`

export const LoginMessageContainer = styled.div`
  width: 200px;
  margin-top: 15px;
`

export const LoginMessageContent = styled.p`
  margin-top: 2px;
  font-size: 12px;
  color: #bb0000;
`

export const LoginButton = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background-color: #8744c5;
  color: #ffffff;

  :focus {
    outline: none !important;
  }

  :hover {
    background-color: #713ba3;
    cursor: pointer;
  }

  :active {
    margin-top: 16px;
    animation-duration: 20s;
  }
`
