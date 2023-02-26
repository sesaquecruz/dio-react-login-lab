import { 
  LoginContainer, 
  LoginContent, 
  LoginTitle,
  LoginInput,
  LoginButton } from "./styles"

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginTitle>Login</LoginTitle>
        <LoginInput type="text" placeholder="username"/>
        <LoginInput type="password" placeholder="password"/>
        <LoginButton>Continue</LoginButton>
      </LoginContent>
    </LoginContainer>
  )
}