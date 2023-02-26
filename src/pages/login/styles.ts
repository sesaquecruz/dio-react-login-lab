import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #424242;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginContent = styled.div`
  width: 300px;
  height: 300px;
  background-color: #67be84f1;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginTitle = styled.h1`
  margin-top: 50px;
`

export const LoginInput = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`

export const LoginButton = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;

  :hover {
    background-color: #ffffff;
    cursor: pointer;
  }

  :active {
    background-color: #67be84f1;
    color: #ffffff;
    animation-duration: 20s;
  }
`
