import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { 
  LoginContainer, 
  LoginContent, 
  LoginTitle,
  LoginInput,
  LoginMessageContainer,
  LoginMessageContent,
  LoginButton } from "./styles"

const schema = yup.object({
  email: yup
    .string()
    .required("email is a required field")
    .email("email is invalid "),
  password: yup
    .string()
    .required("password is a required field")
    .min(8, "password must be at least 8")
}).required();

export default function LoginPage() {
  const { 
    register, 
    watch,
    formState: { errors, isValid } 
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange"
  });

  async function handleSubmit() {
    if (isValid) {
      const fields = watch();
      console.log(`sending request - ${JSON.stringify(fields)}`);
    }
  }

  return (
    <LoginContainer>
      <LoginContent>
        <LoginTitle>Login</LoginTitle>

        <LoginInput type="email" placeholder="email" {...register("email")}/>
        <LoginInput type="password" placeholder="password" {...register("password")}/>

        {!isValid && (
          <LoginMessageContainer>
          {errors.email && (<LoginMessageContent>{`*${errors.email.message}`}</LoginMessageContent>)}
          {errors.password && (<LoginMessageContent>{`*${errors.password.message}`}</LoginMessageContent>)}
         </LoginMessageContainer>  
        )}

        <LoginButton type="submit" onClick={() => handleSubmit()}>Continue</LoginButton>

      </LoginContent>
    </LoginContainer>
  )
}